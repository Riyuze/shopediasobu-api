export {};
import express from "express";
const router = express.Router();
import commentController from "../controllers/comment/commentController";

router.get("/:id", commentController.getCommentsByRefId);
router.post("/:id", commentController.createComment);

export default router;
