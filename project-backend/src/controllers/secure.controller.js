const bcrypt = require("bcryptjs");
const SecureUser = require("../models/SecureUser");

const register = async (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new SecureUser({
        username,
        email,
        password: hashedPassword,
    });

    await user.save();

    res.send("Secure User Registered ✅");
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await SecureUser.findOne({
        email,
    });

    if (!user) {
        return res.send("Secure Login Failed ❌");
    }

    if (
        user.lockedUntil &&
        user.lockedUntil > Date.now()
    ) {
        return res.send("Account Locked 🔒");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (isMatch) {
        user.failedAttempts = 0;
        user.lockedUntil = null;

        await user.save();

        return res.send("Secure Login Success ✅");
    } else {
        user.failedAttempts += 1;

        if (user.failedAttempts >= 5) {
            user.lockedUntil =
                new Date(Date.now() + 5 * 60 * 1000);

            await user.save();

            return res.send(
                "Account Locked for 5 minutes 🔒"
            );
        }

        await user.save();

        res.send(
            `Login Failed ❌ (${user.failedAttempts}/5)`
        );
    }

};

module.exports = {
    register,
    login,
};