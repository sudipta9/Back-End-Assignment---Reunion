const Post = require("../models/posts");
const Comment = require("../models/comments");

const createPostController = async (req, res) => {
    const { title, desc } = req.body;
    if (!title || !desc) {
        return res.status(422).json({
            message: "Please add all the fields",
        });
    }
    const { _id } = req.user;
    try {
        const post = new Post({
            user: _id,
            title,
            desc,
        });
        await post.save();
        res.status(201).json({
            message: "Post created successfully",
            postID: post._id,
            title: post.title,
            desc: post.desc,
            createdAt: post.createdAt,
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

module.exports = createPostController;
