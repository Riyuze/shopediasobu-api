export {};
import ProductModel from "../models/Product";

const getProductsByRefId = async (id: string) => {
    const products = await ProductModel.find({videoId: id}).populate("videoId");

    return products;
};

export default {
    getProductsByRefId
};
