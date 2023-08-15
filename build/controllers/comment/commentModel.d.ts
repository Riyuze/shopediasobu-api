import { Types } from "mongoose";
export interface CommentRequest {
    _id?: Types.ObjectId;
    username: String;
    comment: String;
    videoId: String;
}
export interface CommentResponse {
    _id?: Types.ObjectId;
    username: String;
    comment: String;
    createdAt: Date;
}
