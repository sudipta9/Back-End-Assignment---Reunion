const User = require("../models/users");

const authenticateController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = await user.generateToken();
        res.status(200).json({ token });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = authenticateController;
