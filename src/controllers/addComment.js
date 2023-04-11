const Post = require("../models/posts");
const Comment = require("../models/comments");

const addCommentController = async (req, res) => {
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
        const { user } = req;
        const { comment } = req.body;
        if (!comment) {
            return res.status(422).json({ message: "Comment is required" });
        }
        const post = await Post.findById(id);
        if (!post) {
            return res.status(422).json({ message: "Post not found" });
        }
        const newComment = new Comment({
            comment,
            user: user._id,
            post: post._id,
        });
        await newComment.save();
        post.comments.push(newComment._id);
        post.commentCount += 1;
        await post.save();
        return res.status(200).json({
            message: "Comment added Successfully",
            commentId: newComment._id,
        });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = addCommentController;
