export {};
import { Response, Request } from "express";
import videoUsecase from "../../usecases/videoUsecase";
import { videoThumbnailResponse, videoUrlResponse } from "./videoModel";

const getVideos = async (req: Request, res: Response) => {
    try {
        const videos = await videoUsecase.getVideos();

        if (videos === null) {
            return res.status(400).json({
                status: 400,
                error: "Videos not found.",
            });
        }

        const videoResponse: videoThumbnailResponse[] = videos.map((video) => {
            return {
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

        const videoResponse: videoUrlResponse = {
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

export default {
    getVideos,
    getVideoById,
};
