const Post = require("../models/posts");

const getPostController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(422).json({
                message: "Post id is required",
            });
        }
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            // Yes, it's a valid ObjectId, proceed with `findById` call.
        } else {
            return res.status(422).json({
                message: "Invalid post id",
            });
        }
        const post = await Post.findById(id).populate("comments");
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = getPostController;
