export {};
import CommentModel from "../models/Comment";
import { CommentRequest } from "../controllers/comment/commentModel";

const getCommentsByRefId = async (id: string) => {
    const comments = await CommentModel.find({ videoId: id }).populate(
        "videoId"
    );

    return comments;
};

const addComment = async (newCommentData: CommentRequest) => {
    const newComment = await CommentModel.create(newCommentData);

    return newComment;
};

export default {
    getCommentsByRefId,
    addComment,
};
