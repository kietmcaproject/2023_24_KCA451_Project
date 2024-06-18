const {mongoose, Schema,model} = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: "post",
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { timestamps: true }
);

const commentModel = model("comment", commentSchema);

module.exports = commentModel;