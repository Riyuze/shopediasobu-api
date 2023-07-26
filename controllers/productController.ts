export {};
import { Response, Request } from "express";
import productUsecase from "../usecases/productUsecase";

const getProductsByRefId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (id === "null") {
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
        return res.status(200).json({ status: 200, data: products });
    } catch (error) {
        console.log((error as Error).message);
        return res
            .status(400)
            .json({ status: 400, error: (error as Error).message });
    }
};

export default {
    getProductsByRefId,
};
