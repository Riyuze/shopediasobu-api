"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productController_1 = __importDefault(require("../controllers/product/productController"));
router.get("/:id", productController_1.default.getProductsByRefId);
router.post("/:id", productController_1.default.addProduct);
exports.default = router;
