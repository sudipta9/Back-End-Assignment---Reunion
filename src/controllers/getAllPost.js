const Post = require("../models/posts");

const getAllPostController = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments");
        return res.status(200).json({ posts });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = getAllPostController;
