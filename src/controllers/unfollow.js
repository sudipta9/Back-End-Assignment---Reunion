const User = require("../models/users");

const unfollowController = async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req;

        const userToUnfollow = await User.findOne({
            id,
        });
        if (!userToUnfollow) {
            return res.status(404).json({ message: "User not found" });
        }
        if (userToUnfollow.id === user.id) {
            return res
                .status(400)
                .json({ message: "You cannot unfollow yourself" });
        }
        const isFollowing = user.following.includes(userToUnfollow._id);
        if (!isFollowing) {
            return res
                .status(400)
                .json({ message: "You are not following this user" });
        }
        user.following = user.following.filter(
            (userId) => userId.toString() !== userToUnfollow._id.toString()
        );
        userToUnfollow.followers = userToUnfollow.followers.filter(
            (userId) => userId.toString() !== user._id.toString()
        );
        user.followingCount -= 1;
        userToUnfollow.followerCount -= 1;
        await user.save();
        await userToUnfollow.save();
        res.status(200).json({ message: "Unfollowed successfully" });
    } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = unfollowController;
