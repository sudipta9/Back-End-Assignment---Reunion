const User = require("../models/users");

const registerController = async (req, res) => {
    try {
        const { email, password, name, id } = req.body;
        if (!email || !password || !name || !id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const doesUserExits = await User.findOne({
            $or: [{ email }, { id }],
        });
        if (doesUserExits) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ email, password, name, id });
        await user.save();
        const token = await user.generateToken();
        res.status(201).json({ token });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = registerController;
