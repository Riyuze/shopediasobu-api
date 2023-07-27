export {};
import { VideoRequest } from "../controllers/video/videoModel";
import videoRepository from "../repositories/videoRepository";

const getVideos = async () => {
    const videos = await videoRepository.getVideos();

    return videos;
};

const getVideoById = async (id: string) => {
    const video = await videoRepository.getVideoById(id);

    return video;
};

const addVideo = async (newVideoData: VideoRequest) => {
    const newVideo = await videoRepository.addVideo(newVideoData);

    return newVideo;
};

export default {
    getVideos,
    getVideoById,
    addVideo,
};
