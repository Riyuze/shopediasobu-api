"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const videoController_1 = __importDefault(require("../controllers/video/videoController"));
router.get("/", videoController_1.default.getVideos);
router.post("/", videoController_1.default.addVideo);
router.get("/:id", videoController_1.default.getVideoById);
exports.default = router;
