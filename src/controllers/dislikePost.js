const Post = require("../models/posts");

const dislikePostController = async (req, res) => {
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
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }
        const { likes } = post;
        const { _id } = req.user;
        const isLiked = likes.includes(_id);
        if (!isLiked) {
            return res.status(422).json({
                message: "Post not liked",
            });
        }
        post.likes.pull(_id);
        post.likesCount -= 1;
        await post.save();
        res.status(200).json({
            message: "Post disliked successfully",
        });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

module.exports = dislikePostController;
