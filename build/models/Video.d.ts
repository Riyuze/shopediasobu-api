export {};
import mongoose from "mongoose";
declare const VideoModel: mongoose.Model<{
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
}> & {
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
}, mongoose.Document<unknown, {}, {
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
}> & {
    thumbnail: string;
    url: string;
    title: string;
    channel: string;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export default VideoModel;
