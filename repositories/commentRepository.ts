export {};
import CommentModel from "../models/Comment";
import { commentRequest } from "../controllers/comment/commentModel";

const getCommentsByRefId = async (id: string) => {
    const comments = await CommentModel.find({videoId: id}).populate("videoId");

    return comments;
};

const createComment = async (newCommentData: commentRequest) => {
    const newComment = await CommentModel.create(newCommentData)

    return newComment
}

export default {
    getCommentsByRefId,
    createComment
};
