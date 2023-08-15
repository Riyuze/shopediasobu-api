"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productUsecase_1 = __importDefault(require("../../usecases/productUsecase"));
const getProductsByRefId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id === null) {
            return res
                .status(400)
                .json({ status: 400, error: "Param cannot be empty." });
        }
        const products = yield productUsecase_1.default.getProductsByRefId(id);
        if (products === null) {
            return res.status(404).json({
                status: 404,
                error: "Products not found.",
            });
        }
        const productsResponse = products.map((product) => {
            return {
                _id: product._id,
                title: product.title,
                price: product.price,
                url: product.url,
                image: product.image,
            };
        });
        return res.status(200).json({ status: 200, data: productsResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, price, url, image } = req.body;
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
        const newProductRequest = {
            videoId: id,
            title,
            price,
            url,
            image,
        };
        const productResponse = yield productUsecase_1.default.addProduct(newProductRequest);
        return res.status(200).json({ status: 200, data: productResponse });
    }
    catch (error) {
        console.log(error.message);
        return res
            .status(400)
            .json({ status: 400, error: error.message });
    }
});
exports.default = {
    getProductsByRefId,
    addProduct,
};
