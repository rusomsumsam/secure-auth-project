const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SecureUser = require("../models/SecureUser");

// Register Secure User
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await SecureUser.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new SecureUser({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        return res.status(201).json({
            message: "Secure User Registered ✅",
        });
    } catch (error) {
        console.error("Secure registration error:", error);

        return res.status(500).json({
            message: "Server Error",
        });
    }
};

// Login Secure User
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await SecureUser.findOne({ email });

        // User not found
        if (!user) {
            return res.status(401).json({
                message: "Secure Login Failed ❌",
            });
        }

        // Check whether the user account is active
        if (!user.isActive) {
            return res.status(403).json({
                message: "Account is inactive",
            });
        }

        // Check if account is currently locked
        if (
            user.lockedUntil &&
            user.lockedUntil > new Date()
        ) {
            return res.status(403).json({
                message: "Account Locked 🔒",
            });
        }

        // Compare submitted password with stored bcrypt hash
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        // Correct password
        if (isMatch) {
            user.failedAttempts = 0;
            user.lockedUntil = null;
            user.lastLogin = new Date();

            await user.save();

            // Generate JWT
            const token = jwt.sign(
                {
                    userId: user._id.toString(),
                    role: user.role,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:
                        process.env.JWT_EXPIRES_IN || "1h",
                }
            );

            const isProduction =
                process.env.NODE_ENV === "production";

            // Store JWT in an HTTP-only cookie
            res.cookie("secureAuthToken", token, {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? "none" : "lax",
                maxAge: 60 * 60 * 1000,
                path: "/",
            });

            return res.status(200).json({
                message: "Secure Login Success ✅",
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    lastLogin: user.lastLogin,
                },
            });
        }

        // Wrong password
        user.failedAttempts += 1;

        // Lock account after five failed attempts
        if (user.failedAttempts >= 5) {
            user.lockedUntil = new Date(
                Date.now() + 5 * 60 * 1000
            );

            await user.save();

            return res.status(403).json({
                message:
                    "Account Locked for 5 minutes 🔒",
                failedAttempts: user.failedAttempts,
            });
        }

        await user.save();

        return res.status(401).json({
            message: `Login Failed ❌ (${user.failedAttempts}/5)`,
            failedAttempts: user.failedAttempts,
        });
    } catch (error) {
        console.error("Secure login error:", error);

        return res.status(500).json({
            message: "Server Error",
        });
    }
};

// Get authenticated secure user profile
const getProfile = async (req, res) => {
    try {
        const user = await SecureUser.findById(
            req.user.userId
        ).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "Secure user not found",
            });
        }

        return res.status(200).json({
            message: "Protected profile accessed successfully ✅",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                lastLogin: user.lastLogin,
            },
        });
    } catch (error) {
        console.error(
            "Protected profile error:",
            error
        );

        return res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    register,
    login,
    getProfile,
};