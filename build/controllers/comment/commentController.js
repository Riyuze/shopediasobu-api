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
const commentUsecase_1 = __importDefault(require("../../usecases/commentUsecase"));
const getCommentsByRefId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }
        const comments = yield commentUsecase_1.default.getCommentsByRefId(id);
        if (comments === null) {
            return res.status(404).json({
                status: 404,
                error: "Comments not found.",
            });
        }
        const commentsResponse = comments.map((comment) => {
            return {
                _id: comment._id,
                username: comment.username,
                comment: comment.comment,
                createdAt: comment.createdAt,
            };
        });
        return res.status(200).json({ status: 200, data: commentsResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newCommentRequest = {
            videoId: id,
            username,
            comment,
        };
        const commentResponse = yield commentUsecase_1.default.addComment(newCommentRequest);
        return res.status(200).json({ status: 200, data: commentResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
exports.default = {
    getCommentsByRefId,
    addComment,
};
