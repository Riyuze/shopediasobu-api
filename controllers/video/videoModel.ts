import { Types } from "mongoose";

export interface videoThumbnailResponse {
    _id?: Types.ObjectId;
    thumbnail: String;
}

export interface videoUrlResponse {
    _id?: Types.ObjectId;
    url: String;
}
