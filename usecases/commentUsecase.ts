export {};
import { CommentRequest } from "../controllers/comment/commentModel";
import commentRepository from "../repositories/commentRepository";

const getCommentsByRefId = async (id: string) => {
    const comments = await commentRepository.getCommentsByRefId(id);

    return comments;
};

const addComment = async (newCommentData: CommentRequest) => {
    const newComment = await commentRepository.addComment(newCommentData);

    return newComment;
};

export default {
    getCommentsByRefId,
    addComment,
};
