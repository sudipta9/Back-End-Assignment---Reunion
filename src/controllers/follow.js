const User = require("../models/users");

const followController = async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req;

        const userToFollow = await User.findOne({
            id,
        });
        if (!userToFollow) {
            return res.status(404).json({ message: "User not found" });
        }
        if (userToFollow.id === user.id) {
            return res
                .status(400)
                .json({ message: "You cannot follow yourself" });
        }
        const isFollowing = user.following.includes(userToFollow._id);
        if (isFollowing) {
            return res
                .status(400)
                .json({ message: "You are already following this user" });
        }
        user.following.push(userToFollow._id);
        user.followingCount += 1;
        userToFollow.followers.push(user._id);
        userToFollow.followerCount += 1;
        await user.save();
        await userToFollow.save();
        res.status(200).json({ message: "Followed successfully" });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = followController;
