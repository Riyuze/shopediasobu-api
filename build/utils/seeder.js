"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { faker } = require("@faker-js/faker");
const Video_1 = __importDefault(require("../models/Video"));
const Product_1 = __importDefault(require("../models/Product"));
const Comment_1 = __importDefault(require("../models/Comment"));
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Video_1.default.collection.drop();
        Product_1.default.collection.drop();
        Comment_1.default.collection.drop();
    }
    catch (error) {
        console.log(error.message);
    }
    const youtubeUrl = [
        "https://www.youtube.com/watch?v=mvQHqxmdYV0",
        "https://www.youtube.com/watch?v=Dg0IjOzopYU",
        "https://www.youtube.com/watch?v=sSTVhCsnqsU",
        "https://www.youtube.com/watch?v=iZj9Amt6kcw",
        "https://www.youtube.com/watch?v=ENgujtcYrk8",
    ];
    for (let i = 0; i < 5; i++) {
        const thumbnail = faker.image.url();
        const url = youtubeUrl[i];
        const title = faker.word.words(3);
        const channel = faker.internet.displayName();
        yield Video_1.default.create({ thumbnail, url, title, channel });
    }
    const videos = yield Video_1.default.find();
    videos.forEach((video) => __awaiter(void 0, void 0, void 0, function* () {
        for (let i = 0; i < 5; i++) {
            const title = faker.commerce.productName();
            const price = faker.commerce.price();
            const url = faker.internet.url();
            const image = faker.image.url();
            const username = faker.internet.userName();
            const comment = faker.word.words(8);
            const videoId = video._id;
            yield Product_1.default.create({ title, price, url, image, videoId });
            yield Comment_1.default.create({ username, comment, videoId });
        }
    }));
    console.log("Database Populated!");
});
exports.default = seedDB;
