import { Types } from "mongoose";

export interface productResponse {
    _id?: Types.ObjectId;
    title: String,
    price: Number,
    url: String,
}