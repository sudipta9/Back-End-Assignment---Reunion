const Post = require("../models/posts");
const Comment = require("../models/comments");
const deletePostController = async (req, res) => {
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
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(422).json({
                message: "Post not found",
            });
        }
        // check if the post belongs to the user
        if (post.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                message: "You are not authorized to delete this post",
            });
        }
        // delete the post
        await Post.findByIdAndDelete(id);
        // delete comments associated with the post
        const comments = await Comment.find({ post: id });
        comments.forEach(async (comment) => {
            await Comment.findByIdAndDelete(comment._id);
        });
        res.status(200).json({
            message: "Post deleted successfully",
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

module.exports = deletePostController;
