export {};
import { Response, Request } from "express";
import productUsecase from "../../usecases/productUsecase";
import { ProductRequest, ProductResponse } from "./productModel";

const getProductsByRefId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }

        const products = await productUsecase.getProductsByRefId(id);

        if (products === null) {
            return res.status(400).json({
                status: 400,
                error: "Products not found.",
            });
        }

        const productsResponse: ProductResponse[] = products.map((product) => {
            return {
                title: product.title,
                price: product.price,
                url: product.url,
            };
        });

        return res.status(200).json({ status: 200, data: productsResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

const addProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, price, url } = req.body;

        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }

        if (title === null || price === null || url === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Invalid JSON body." });
        }

        const newProductRequest: ProductRequest = {
            userId: id,
            title,
            price,
            url,
        };

        const productResponse = await productUsecase.addProduct(
            newProductRequest
        );

        return res.status(200).json({ status: 200, data: productResponse });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

export default {
    getProductsByRefId,
    addProduct,
};
