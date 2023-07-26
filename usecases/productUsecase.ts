export {};
import productRepository from "../repositories/productRepository";

const getProductsByRefId = async (id: string) => {
    const products = await productRepository.getProductsByRefId(id);
    
    return products;
};

export default {
    getProductsByRefId,
};
