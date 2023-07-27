export {};
import { Response, Request } from "express";
import videoUsecase from "../../usecases/videoUsecase";
import {
    VideoThumbnailResponse,
    VideoUrlResponse,
    VideoRequest,
} from "./videoModel";

const getVideos = async (req: Request, res: Response) => {
    try {
        const videos = await videoUsecase.getVideos();

        if (videos === null) {
            return res.status(400).json({
                status: 400,
                error: "Videos not found.",
            });
        }

        const videoResponse: VideoThumbnailResponse[] = videos.map((video) => {
            return {
                _id: video._id,
                thumbnail: video.thumbnail,
            };
        });

        return res.status(200).json({ status: 200, data: videoResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

const getVideoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }

        const video = await videoUsecase.getVideoById(id);

        if (video === null) {
            return res.status(400).json({
                status: 400,
                error: "Video not found.",
            });
        }

        const videoResponse: VideoUrlResponse = {
            _id: video._id,
            url: video.url,
        };

        return res.status(200).json({ status: 200, data: videoResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

const addVideo = async (req: Request, res: Response) => {
    try {
        const { thumbnail, url } = req.body;

        if (thumbnail === null || url === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Invalid JSON body." });
        }

        const newVideoRequest: VideoRequest = {
            thumbnail,
            url,
        };

        const videoResponse = await videoUsecase.addVideo(newVideoRequest);

        return res.status(200).json({ status: 200, data: videoResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

export default {
    getVideos,
    getVideoById,
    addVideo,
};
