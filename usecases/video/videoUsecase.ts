export {};
import videoRepository from "../../repositories/videoRepository";
import { videoThumbnail, videoUrl } from "./videoModel";

const getVideos = async () => {
    const videos = await videoRepository.getVideos();

    const videoResponse: videoThumbnail[] = videos.map((video) => {
        return {
            thumbnail: video.thumbnail,
        };
    });

    return videoResponse;
};

const getVideoById = async (id: string) => {
    const video = await videoRepository.getVideoById(id);

    if (video == null) {
        return video;
    }

    const videoResponse: videoUrl = {
        url: video.url,
    };

    return videoResponse;
};

export default {
    getVideos,
    getVideoById,
};
