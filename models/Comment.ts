export {};
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    videoId: {
        type: mongoose.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const CommentModel = mongoose.model("Comment", CommentSchema);

export default CommentModel;
