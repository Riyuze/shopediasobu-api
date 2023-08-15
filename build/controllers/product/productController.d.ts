/// <reference types="qs" />
export {};
import { Response, Request } from "express";
declare const _default: {
    getProductsByRefId: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    addProduct: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
