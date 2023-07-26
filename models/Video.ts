export {};
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

const VideoModel = mongoose.model("Video", VideoSchema);

export default VideoModel;
