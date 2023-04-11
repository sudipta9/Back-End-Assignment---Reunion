const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const { default: mongoose } = require("mongoose");
const describe = require("mocha").describe;

chai.use(chaiHttp);
chai.should();

before((done) => {
    mongoose.connection.on("connected", () => {
        console.log("Connected to the database");
        done();
    });
});

describe("Testing Application", () => {
    let user1token = null;
    let user2token = null;
    let postId1 = null;
    let postId2 = null;
    let totalPosts = null;
    describe("Starting with a GET / request", () => {
        it("should return a 200 status code", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    // test for register
    describe("Registering a new user", () => {
        it("should return a 201 status code", (done) => {
            chai.request(server)
                .post("/api/register")
                .send({
                    id: 1,
                    name: "John Doe",
                    email: "johndoe@textmail.com",
                    password: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it("should return a 201 status code", (done) => {
            chai.request(server)
                .post("/api/register")
                .send({
                    id: 2,
                    name: "Jane Doe",
                    email: "someotheremail@gmail.com",
                    password: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it("should return a 201 status code", (done) => {
            chai.request(server)
                .post("/api/register")
                .send({
                    id: 3,
                    name: "Sudipta Pradhan",
                    email: "sudipta@gmail.com",
                    password: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it("should return a 400 status code", (done) => {
            chai.request(server)
                .post("/api/register")
                .send({
                    id: 4,
                    name: "Sudipta Pradhan",
                    email: "",
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it("should return a 400 status code", (done) => {
            chai.request(server)
                .post("/api/register")
                .send({
                    id: 5,
                    name: "Sudipta Pradhan",
                    email: "sudipta@gmail.com",
                    password: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    // test for authentication
    describe("Authentication", () => {
        it("should return a token for a valid user and password", (done) => {
            chai.request(server)
                .post("/api/authenticate")
                .send({ email: "johndoe@textmail.com", password: "123456" })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("token");
                    user1token = res.body.token;
                    done();
                });
        });
        it("should return a token for a valid user and password", (done) => {
            chai.request(server)
                .post("/api/authenticate")
                .send({
                    email: "someotheremail@gmail.com",
                    password: "123456",
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("token");
                    user2token = res.body.token;
                    done();
                });
        });
        it("should return a 401 for an invalid user and password", (done) => {
            chai.request(server)
                .post("/api/authenticate")
                .send({
                    email: "something@gmail.com",
                    password: "12345678",
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
        it("should return a 400 for an invalid request", (done) => {
            chai.request(server)
                .post("/api/authenticate")
                .send({})
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    // test for follow
    describe("Follow", () => {
        it("should return a 200 status code as successfully followed", (done) => {
            chai.request(server)
                .post("/api/follow/2")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 200 status code as successfully followed", (done) => {
            chai.request(server)
                .post("/api/follow/3")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 400 status code as user is following himself", (done) => {
            chai.request(server)
                .post("/api/follow/1")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it("should return a 400 status code as user already following", (done) => {
            chai.request(server)
                .post("/api/follow/2")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it("should return a 404 status code as user not exits", (done) => {
            chai.request(server)
                .post("/api/follow/10")
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    // test for unfollow
    describe("Unfollow", () => {
        it("should return a 200 status code as successfully unfollowed", (done) => {
            chai.request(server)
                .post("/api/unfollow/2")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 400 status code as user is unfollowing himself", (done) => {
            chai.request(server)
                .post("/api/unfollow/1")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it("should return a 400 status code as user is not following", (done) => {
            chai.request(server)
                .post("/api/unfollow/2")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
        it("should return a 404 status code as user not exits", (done) => {
            chai.request(server)
                .post("/api/unfollow/10")
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    // test for user profile
    describe("User Profile", () => {
        it("should return a 200 status code as successfully fetched the user profile", (done) => {
            chai.request(server)
                .get("/api/user")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("id");
                    res.body.should.have.property("email");
                    res.body.should.have.property("name");
                    res.body.should.have.property("followerCount");
                    res.body.should.have.property("followingCount");
                    done();
                });
        });
        it("should return a 200 status code as successfully fetched the user profile", (done) => {
            chai.request(server)
                .get("/api/user")
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("id");
                    res.body.should.have.property("email");
                    res.body.should.have.property("name");
                    res.body.should.have.property("followerCount");
                    res.body.should.have.property("followingCount");
                    done();
                });
        });

        it("should return a 401 status code as not authorized", (done) => {
            chai.request(server)
                .get("/api/user")
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    // test for posts creation
    describe("Posts", () => {
        it("should return a 200 status code as post successfully created", (done) => {
            chai.request(server)
                .post("/api/posts")
                .set("token", user1token)
                .send({
                    title: "Test Post",
                    desc: "This is a test post",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("postID");
                    res.body.should.have.property("title");
                    res.body.should.have.property("desc");
                    res.body.should.have.property("createdAt");
                    postId1 = res.body.postID;
                    done();
                });
        });
        it("should return a 200 status code as post successfully created", (done) => {
            chai.request(server)
                .post("/api/posts")
                .set("token", user2token)
                .send({
                    title: "Test Post 2",
                    desc: "This is a test post 2",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("postID");
                    res.body.should.have.property("title");
                    res.body.should.have.property("desc");
                    res.body.should.have.property("createdAt");
                    postId2 = res.body.postID;
                    done();
                });
        });
        it("should return a 200 status code as post successfully created", (done) => {
            chai.request(server)
                .post("/api/posts")
                .set("token", user2token)
                .send({
                    title: "Test Post 3",
                    desc: "This is a test post 3",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("postID");
                    res.body.should.have.property("title");
                    res.body.should.have.property("desc");
                    res.body.should.have.property("createdAt");
                    done();
                });
        });
        it("should return a 401 status code as not authorized", (done) => {
            chai.request(server)
                .post("/api/posts")
                .send({
                    title: "Test Post",
                    desc: "This is a test post",
                })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
        it("should return a 422 status code as invalid request", (done) => {
            chai.request(server)
                .post("/api/posts")
                .set("token", user1token)
                .send({})
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

    // test for posts like
    describe("Posts Like", () => {
        it("should return a 200 status code as post successfully liked", (done) => {
            chai.request(server)
                .post("/api/like/" + postId1)
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 200 status code as post successfully liked", (done) => {
            chai.request(server)
                .post("/api/like/" + postId1)
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 422 status code as already liked", (done) => {
            chai.request(server)
                .post("/api/like/" + postId1)
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
        it("should return a 422 status code as post not found", (done) => {
            chai.request(server)
                .post("/api/like/10")
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

    // test for posts dislike
    describe("Posts Unlike", () => {
        it("should return a 200 status code as post successfully disliked", (done) => {
            chai.request(server)
                .post("/api/unlike/" + postId1)
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 200 status code as post successfully disliked", (done) => {
            chai.request(server)
                .post("/api/unlike/" + postId1)
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 422 status code as not liked", (done) => {
            chai.request(server)
                .post("/api/unlike/" + postId1)
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
        it("should return a 422 status code as post not found", (done) => {
            chai.request(server)
                .post("/api/unlike/10")
                .set("token", user2token)
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

    // test for posts get all
    describe("Posts Get All", () => {
        it("should return a 200 status code as posts successfully fetched", (done) => {
            chai.request(server)
                .get("/api/all_posts")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("posts");
                    res.body.posts.should.be.a("array");
                    res.body.posts.length.should.be.eq(3);
                    totalPosts = res.body.posts.length;
                    done();
                });
        });
    });

    // test for single post get
    describe("Single Post Get", () => {
        it("should return a 200 status code as post successfully fetched", (done) => {
            chai.request(server)
                .get("/api/posts/" + postId1)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("post");
                    res.body.post.should.be.a("object");
                    res.body.post.should.have.property("title");
                    res.body.post.should.have.property("desc");
                    res.body.post.should.have.property("likes");
                    res.body.post.should.have.property("comments");
                    res.body.post.should.have.property("createdAt");
                    res.body.post.should.have.property("user");
                    res.body.post.should.have.property("likesCount");
                    res.body.post.should.have.property("commentCount");
                    res.body.post.comments.should.be.a("array");
                    done();
                });
        });
        it("should return a 422 status code as post not found", (done) => {
            chai.request(server)
                .get("/api/posts/10")
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

    // test for comment on post
    describe("Comment on Post", () => {
        it("should return a 200 status code as comment successfully created", (done) => {
            chai.request(server)
                .post("/api/comment/" + postId1)
                .set("token", user1token)
                .send({
                    comment: "This is a test comment",
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("commentId");
                    done();
                });
        });
        it("should return a 422 status code as post not found", (done) => {
            chai.request(server)
                .post("/api/comment/10")
                .set("token", user1token)
                .send({
                    comment: "This is a test comment",
                })
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
        it("should return a 422 status code as invalid request", (done) => {
            chai.request(server)
                .post("/api/comment/" + postId1)
                .set("token", user1token)
                .send({})
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

    // test for delete a post
    describe("Delete a Post", () => {
        it("should return a 200 status code as post successfully deleted", (done) => {
            chai.request(server)
                .delete("/api/posts/" + postId1)
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return a 422 status code as post not found", (done) => {
            chai.request(server)
                .delete("/api/posts/10")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
        it("should return a 422 status code as not authorized", (done) => {
            chai.request(server)
                .delete("/api/posts/" + postId2)
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

    // test to verify the total number of posts
    describe("Total Number of Posts", () => {
        it("should return a 200 status code as posts successfully fetched", (done) => {
            chai.request(server)
                .get("/api/all_posts")
                .set("token", user1token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("posts");
                    res.body.posts.should.be.a("array");
                    res.body.posts.length.should.be.eq(totalPosts - 1);
                    done();
                });
        });
    });
});

// close the server after running the tests
after((done) => {
    server.close(async () => {
        // delete all the data from the database and close the connection
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
        done();
    });
});
