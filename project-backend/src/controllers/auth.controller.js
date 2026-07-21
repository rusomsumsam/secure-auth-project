const User = require("../models/User");

const register = async (req, res) => {
    const { username, email, password } = req.body;

    const user = new User({
        username,
        email,
        password,
    });

    await user.save();

    res.send("User registered ✅");
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password,
    });

    if (user) {
        res.send("Login SUCCESS ✅");
    } else {
        res.send("Login FAILED ❌");
    }
};

module.exports = {
    register,
    login,
};