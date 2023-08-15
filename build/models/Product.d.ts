export {};
import mongoose from "mongoose";
declare const ProductModel: mongoose.Model<{
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
}> & {
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
}, mongoose.Document<unknown, {}, {
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
}> & {
    url: string;
    title: string;
    price: number;
    image: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default ProductModel;
