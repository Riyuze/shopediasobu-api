export {};
import express from "express";
const router = express.Router();
import productController from "../controllers/productController";

router.get("/:id", productController.getProductsByRefId);

export default router;
