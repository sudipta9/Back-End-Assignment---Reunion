const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const isAuthenticated = require("./middlewares/auth");

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect to the database
mongoose
    .connect(config.get("db"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        // console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/api/authenticate", require("./controllers/authenticate"));
app.post("/api/register", require("./controllers/register"));
app.get("/api/user", isAuthenticated, require("./controllers/user"));
app.post("/api/follow/:id", isAuthenticated, require("./controllers/follow"));
app.post(
    "/api/unfollow/:id",
    isAuthenticated,
    require("./controllers/unfollow")
);
app.post("/api/posts", isAuthenticated, require("./controllers/createPost"));
app.get("/api/posts/:id", require("./controllers/getPost"));
app.get("/api/all_posts", require("./controllers/getAllPost"));
app.delete(
    "/api/posts/:id",
    isAuthenticated,
    require("./controllers/deletePost")
);
app.post("/api/like/:id", isAuthenticated, require("./controllers/likePost"));
app.post(
    "/api/unlike/:id",
    isAuthenticated,
    require("./controllers/dislikePost")
);
app.post(
    "/api/comment/:id",
    isAuthenticated,
    require("./controllers/addComment")
);

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;
