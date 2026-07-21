const InsecureUser = require("../models/InsecureUser");

const register = async (req, res) => {
    const { username, email, password } = req.body;

    const user = new InsecureUser({
        username,
        email,
        password,
    });

    await user.save();

    res.send("Insecure User Registered ✅");
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await InsecureUser.findOne({
        email,
        password,
    });

    if (user) {
        res.send("Insecure Login Success ✅");
    } else {
        res.send("Insecure Login Failed ❌");
    }
};

module.exports = {
    register,
    login,
};