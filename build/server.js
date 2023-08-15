"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const router_1 = __importDefault(require("./routers/router"));
const seeder_1 = __importDefault(require("./utils/seeder"));
// Connect to database
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dssapsi.mongodb.net/shopediasobu-db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("Connected to MongoDB!");
    (0, seeder_1.default)();
})
    .catch((err) => {
    console.log(`An Error Occured! ${err}`);
});
// Enable CORS
app.use(cors());
// Parse JSON bodies
app.use(body_parser_1.default.json());
// Parse URL-Encoded bodies
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", router_1.default);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
