export {};
import express from "express";
const router = express.Router();
import videoController from "../controllers/video/videoController";

router.get("/", videoController.getVideos);
router.get("/:id", videoController.getVideoById);

export default router;
