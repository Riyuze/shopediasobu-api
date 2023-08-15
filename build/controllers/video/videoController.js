"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videoUsecase_1 = __importDefault(require("../../usecases/videoUsecase"));
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield videoUsecase_1.default.getVideos();
        if (videos === null) {
            return res.status(400).json({
                status: 400,
                error: "Videos not found.",
            });
        }
        const videoResponse = videos.map((video) => {
            return {
                _id: video._id,
                thumbnail: video.thumbnail,
                title: video.title,
                channel: video.channel,
            };
        });
        return res.status(200).json({ status: 200, data: videoResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
const getVideoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }
        const video = yield videoUsecase_1.default.getVideoById(id);
        if (video === null) {
            return res.status(404).json({
                status: 404,
                error: "Video not found.",
            });
        }
        const videoResponse = {
            _id: video._id,
            url: video.url,
            title: video.title,
            channel: video.channel,
        };
        return res.status(200).json({ status: 200, data: videoResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
const addVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { thumbnail, url } = req.body;
        if (thumbnail === null || url === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Invalid JSON body." });
        }
        const newVideoRequest = {
            thumbnail,
            url,
        };
        const videoResponse = yield videoUsecase_1.default.addVideo(newVideoRequest);
        return res.status(200).json({ status: 200, data: videoResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
exports.default = {
    getVideos,
    getVideoById,
    addVideo,
};
