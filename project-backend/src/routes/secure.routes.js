const express = require("express");
const router = express.Router();

const {
    register,
    login,
    getProfile,
} = require("../controllers/secure.controller");

const secureLoginLimiter = require(
    "../middleware/secureLoginLimiter"
);

const authenticateUser = require(
    "../middleware/auth.middleware"
);

router.post("/register", register);

router.post(
    "/login",
    secureLoginLimiter,
    login
);

router.get(
    "/profile",
    authenticateUser,
    getProfile
);

module.exports = router;