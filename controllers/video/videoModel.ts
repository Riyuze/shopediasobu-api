import { Types } from "mongoose";

export interface VideoRequest {
    _id?: Types.ObjectId;
    thumbnail: String;
    url: String;
}

export interface VideoThumbnailResponse {
    _id?: Types.ObjectId;
    thumbnail: String;
}

export interface VideoUrlResponse {
    _id?: Types.ObjectId;
    url: String;
}
