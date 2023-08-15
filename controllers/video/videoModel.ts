import { Types } from "mongoose";

export interface VideoRequest {
    _id?: Types.ObjectId;
    thumbnail: String;
    url: String;
}

export interface VideoThumbnailResponse {
    _id?: Types.ObjectId;
    thumbnail: String;
    title: string;
    channel: string;
}

export interface VideoUrlResponse {
    _id?: Types.ObjectId;
    url: String;
    title: string;
    channel: string;
}
