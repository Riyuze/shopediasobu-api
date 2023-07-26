export {};
import VideoModel from "../models/Video";

const getVideos = async () => {
    const videos = await VideoModel.find();

    return videos;
};

const getVideoById = async (id: string) => {
    const video = await VideoModel.findById(id);

    return video;
};

export default {
    getVideos,
    getVideoById
};
