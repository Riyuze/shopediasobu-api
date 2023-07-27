export {};
import productRepository from "../repositories/productRepository";
import { ProductRequest } from "../controllers/product/productModel";

const getProductsByRefId = async (id: string) => {
    const products = await productRepository.getProductsByRefId(id);

    return products;
};

const addProduct = async (newProductData: ProductRequest) => {
    const newProduct = await productRepository.addProduct(newProductData);

    return newProduct;
};

export default {
    getProductsByRefId,
    addProduct,
};
