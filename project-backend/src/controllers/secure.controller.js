const bcrypt = require("bcryptjs");
const SecureUser = require("../models/SecureUser");

// Register Secure User
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await SecureUser.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
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

        // Check if account is locked
        if (
            user.lockedUntil &&
            user.lockedUntil > Date.now()
        ) {
            return res.status(403).json({
                message: "Account Locked 🔒",
            });
        }

        // Compare password
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

            return res.status(200).json({
                message: "Secure Login Success ✅",
            });
        }

        // Wrong password
        user.failedAttempts += 1;

        if (user.failedAttempts >= 5) {
            user.lockedUntil = new Date(
                Date.now() + 5 * 60 * 1000
            );

            await user.save();

            return res.status(403).json({
                message: "Account Locked for 5 minutes 🔒",
            });
        }

        await user.save();

        return res.status(401).json({
            message: `Login Failed ❌ (${user.failedAttempts}/5)`,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    register,
    login,
};