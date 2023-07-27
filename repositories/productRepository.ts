export {};
import ProductModel from "../models/Product";
import { ProductRequest } from "../controllers/product/productModel";

const getProductsByRefId = async (id: string) => {
    const products = await ProductModel.find({ videoId: id }).populate(
        "videoId"
    );

    return products;
};

const addProduct = async (newProductData: ProductRequest) => {
    const newProduct = await ProductModel.create(newProductData);

    return newProduct;
};

export default {
    getProductsByRefId,
    addProduct,
};
