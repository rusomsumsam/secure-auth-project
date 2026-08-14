const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    try {
        const token = req.cookies.secureAuthToken;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = {
            userId: decodedToken.userId,
            role: decodedToken.role,
        };

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message:
                    "Authentication token has expired. Please log in again.",
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid authentication token",
            });
        }

        console.error(
            "Authentication middleware error:",
            error
        );

        return res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = authenticateUser;