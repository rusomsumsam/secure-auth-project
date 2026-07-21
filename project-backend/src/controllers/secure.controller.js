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

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (isMatch) {
        res.send("Secure Login Success ✅");
    } else {
        res.send("Secure Login Failed ❌");
    }
};

module.exports = {
    register,
    login,
};