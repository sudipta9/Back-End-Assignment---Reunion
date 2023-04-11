const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/users");
const isAuthenticated = async (req, res, next) => {
    if (!req.header("token")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = req.header("token");
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = isAuthenticated;
