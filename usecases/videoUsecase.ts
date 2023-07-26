export {};
import videoRepository from "../repositories/videoRepository";

const getVideos = async () => {
    const videos = await videoRepository.getVideos();

    return videos;
};

const getVideoById = async (id: string) => {
    const video = await videoRepository.getVideoById(id);

    return video;
};

export default {
    getVideos,
    getVideoById,
};
