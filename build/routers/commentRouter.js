"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const commentController_1 = __importDefault(require("../controllers/comment/commentController"));
router.get("/:id", commentController_1.default.getCommentsByRefId);
router.post("/:id", commentController_1.default.addComment);
exports.default = router;
