export {};
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    videoId: {
        type: mongoose.Types.ObjectId,
        ref: "Video",
        required: true,
    },
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
