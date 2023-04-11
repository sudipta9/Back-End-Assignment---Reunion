const userController = (req, res) => {
    return res.status(200).json({
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        followerCount: req.user.followerCount,
        followingCount: req.user.followingCount,
    });
};

module.exports = userController;
