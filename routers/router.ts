export {};
import express from "express";
const router = express.Router();
import videoRouter from "./videoRouter";
import productRouter from "./productRouter";
import commentRouter from "./commentRouter";

// Gets video routes
router.use("/video", videoRouter);

// Gets product routes
router.use("/product", productRouter);

// Gets comment routes
router.use("/comment", commentRouter);

export default router;
