export {};
import { productResponse } from "./productModel";
import productRepository from "../../repositories/productRepository";

const getProductsByRefId = async (id: string) => {
    const products = await productRepository.getProductsByRefId(id);

    if (products == null) {
        return products;
    }

    const productsResponse: productResponse[] = products.map((product) => {
        return {
            title: product.title,
            price: product.price,
            url: product.url,
        };
    });

    return productsResponse;
};

export default {
    getProductsByRefId,
};
