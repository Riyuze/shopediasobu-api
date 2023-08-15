"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    videoId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const CommentModel = mongoose_1.default.model("Comment", CommentSchema);
exports.default = CommentModel;
