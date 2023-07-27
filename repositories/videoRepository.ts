export {};
import { VideoRequest } from "../controllers/video/videoModel";
import VideoModel from "../models/Video";

const getVideos = async () => {
    const videos = await VideoModel.find();

    return videos;
};

const getVideoById = async (id: string) => {
    const video = await VideoModel.findById(id);

    return video;
};

const addVideo = async (newVideoData: VideoRequest) => {
    const newVideo = await VideoModel.create(newVideoData);

    return newVideo;
};

export default {
    getVideos,
    getVideoById,
    addVideo,
};
