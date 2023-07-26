import { Types } from "mongoose";

export interface videoThumbnail {
    _id?: Types.ObjectId;
    thumbnail: String;
}

export interface videoUrl {
    _id?: Types.ObjectId;
    url: String;
}
