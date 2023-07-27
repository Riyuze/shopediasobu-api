export {};
const { faker } = require("@faker-js/faker");
import VideoModel from "../models/Video";
import ProductModel from "../models/Product";
import CommentModel from "../models/Comment";

const seedDB = async () => {
    VideoModel.collection.drop();
    ProductModel.collection.drop();
    CommentModel.collection.drop();

    for (let i = 0; i < 5; i++) {
        const thumbnail = faker.image.url()
        const url = faker.internet.url()

        await VideoModel.create({ thumbnail, url })
    }

    const videos = await VideoModel.find();

    videos.forEach(async (video) => {
        for (let i = 0; i < 5; i++) {
            const title = faker.commerce.productName()
            const price = faker.commerce.price()
            const url = faker.internet.url()

            const username = faker.internet.userName()
            const comment = faker.word.words(8)

            const videoId = video._id
    
            await ProductModel.create({ title, price, url, videoId })
            await CommentModel.create({ username, comment, videoId })
        }
    })

    console.log("Database Populated!")
}

export default seedDB
