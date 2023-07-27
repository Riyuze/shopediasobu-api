import { Types } from "mongoose";

export interface ProductRequest {
    _id?: Types.ObjectId;
    title: String;
    price: Number;
    url: String;
    userId: String;
}

export interface ProductResponse {
    _id?: Types.ObjectId;
    title: String;
    price: Number;
    url: String;
}
