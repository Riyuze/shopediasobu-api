export {};
const { faker } = require("@faker-js/faker");
import VideoModel from "../models/Video";
import ProductModel from "../models/Product";
import CommentModel from "../models/Comment";

const seedDB = async () => {
    try {
        VideoModel.collection.drop();
        ProductModel.collection.drop();
        CommentModel.collection.drop();
    } catch (error) {
        console.log((error as Error).message);
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

        await VideoModel.create({ thumbnail, url, title, channel });
    }

    const videos = await VideoModel.find();

    videos.forEach(async (video) => {
        for (let i = 0; i < 5; i++) {
            const title = faker.commerce.productName();
            const price = faker.commerce.price();
            const url = faker.internet.url();
            const image = faker.image.url();

            const username = faker.internet.userName();
            const comment = faker.word.words(8);

            const videoId = video._id;

            await ProductModel.create({ title, price, url, image, videoId });
            await CommentModel.create({ username, comment, videoId });
        }
    });

    console.log("Database Populated!");
};

export default seedDB;
