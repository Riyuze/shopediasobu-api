import { Types } from "mongoose";

export interface commentRequest {
    _id?: Types.ObjectId;
    username: String;
    comment: String;
    userId: String;
}

export interface commentResponse {
    _id?: Types.ObjectId;
    username: String;
    comment: String;
    createdAt: Date;
}
