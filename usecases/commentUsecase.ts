export {};
import { commentResponse } from "../controllers/comment/commentModel";
import commentRepository from "../repositories/commentRepository";

const getCommentsByRefId = async (id: string) => {
    const comments = await commentRepository.getCommentsByRefId(id);

    return comments
};

const createComment = async (id: string, username: string, comment: string) => {
    const newCommentData = {
        userId: id,
        username,
        comment,
    };

    const newComment = await commentRepository.createComment(newCommentData);

    return newComment;
};

export default {
    getCommentsByRefId,
    createComment,
};
