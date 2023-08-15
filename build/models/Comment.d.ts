export {};
import mongoose from "mongoose";
declare const CommentModel: mongoose.Model<{
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
}> & {
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
}, mongoose.Document<unknown, {}, {
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
}> & {
    comment: string;
    videoId: {
        prototype?: mongoose.Types.ObjectId | undefined;
        cacheHexString?: unknown;
        generate?: {} | undefined;
        createFromTime?: {} | undefined;
        createFromHexString?: {} | undefined;
        createFromBase64?: {} | undefined;
        isValid?: {} | undefined;
    };
    username: string;
    createdAt: Date;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default CommentModel;
