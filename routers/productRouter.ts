export {};
import express from "express";
const router = express.Router();
import productController from "../controllers/product/productController";

router.get("/:id", productController.getProductsByRefId);
router.post("/:id", productController.addProduct);

export default router;
