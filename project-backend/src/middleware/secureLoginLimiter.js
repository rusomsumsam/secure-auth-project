const rateLimit = require("express-rate-limit");

const secureLoginLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 10,

    standardHeaders: true,
    legacyHeaders: false,

    message: {
        message:
            "Too many secure login requests. Please try again after 1 minute.",
    },
});

module.exports = secureLoginLimiter;