export {};
import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import bodyParser from "body-parser";
require("dotenv").config();
const app = express();
const port = process.env.PORT;

import router from "./routers/router";

// Connect to database
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dssapsi.mongodb.net/asobu-db?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions
    )
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err: Error) => {
        console.log(`An Error Occured! ${err}`);
    });

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-Encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
