"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const videoRouter_1 = __importDefault(require("./videoRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
// Gets video routes
router.use("/video", videoRouter_1.default);
// Gets product routes
router.use("/product", productRouter_1.default);
// Gets comment routes
router.use("/comment", commentRouter_1.default);
exports.default = router;
