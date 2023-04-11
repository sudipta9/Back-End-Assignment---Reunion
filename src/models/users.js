const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        followers: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        followerCount: {
            type: Number,
            default: 0,
        },
        following: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        followingCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret;
            },
        },
    }
);

// UserSchema.plugin(require("mongoose-autopopulate"));

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return password === this.password;
    } catch (error) {
        throw new Error(error);
    }
};

UserSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, config.get("jwtSecret"), {
            expiresIn: "1d",
        });
        return token;
    } catch (error) {
        throw new Error(error);
    }
};

UserSchema.statics.findByCredentials = async function (email, password) {
    try {
        const user = await this.findOne({ email });
        if (!user) {
            return null;
        }
        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
            return null;
        }
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = mongoose.model("User", UserSchema);
