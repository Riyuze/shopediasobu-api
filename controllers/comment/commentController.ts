export {};
import { Response, Request } from "express";
import commentUsecase from "../../usecases/commentUsecase";
import { CommentRequest, CommentResponse } from "./commentModel";

const getCommentsByRefId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }

        const comments = await commentUsecase.getCommentsByRefId(id);

        if (comments === null) {
            return res.status(400).json({
                status: 400,
                error: "Comments not found.",
            });
        }

        const commentsResponse: CommentResponse[] = comments.map((comment) => {
            return {
                username: comment.username,
                comment: comment.comment,
                createdAt: comment.createdAt,
            };
        });

        return res.status(200).json({ status: 200, data: commentsResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

const addComment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { username, comment } = req.body;

        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }

        if (username === null || comment === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Invalid JSON body." });
        }

        const newCommentRequest: CommentRequest = {
            userId: id,
            username,
            comment,
        };

        const commentResponse = await commentUsecase.addComment(
            newCommentRequest
        );

        return res.status(200).json({ status: 200, data: commentResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

export default {
    getCommentsByRefId,
    addComment,
};
