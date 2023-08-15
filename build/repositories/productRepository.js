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
const Product_1 = __importDefault(require("../models/Product"));
const getProductsByRefId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product_1.default.find({ videoId: id }).populate("videoId");
    return products;
});
const addProduct = (newProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield Product_1.default.create(newProductData);
    return newProduct;
});
exports.default = {
    getProductsByRefId,
    addProduct,
};
