export {};
const { faker } = require("@faker-js/faker");
import VideoModel from "../models/Video";
import ProductModel from "../models/Product";
import CommentModel from "../models/Comment";

const seedDB = async () => {
    for (let i = 0; i < 5; i++) {
        const thumbnail = faker.image.url()
        const url = faker.internet.url()

        VideoModel.create({ thumbnail, url })
    }

    const videos = await VideoModel.find();

    videos.forEach((video) => {
        for (let i = 0; i < 5; i++) {
            const title = faker.commerce.productName()
            const price = faker.commerce.price()
            const url = faker.internet.url()

            const username = faker.internet.userName()
            const comment = faker.word.words(8)

            const userId = video._id
    
            ProductModel.create({ title, price, url, userId })
            CommentModel.create({ username, comment, userId })
        }
    })

    console.log("Database Populated!")
}

export default seedDB
