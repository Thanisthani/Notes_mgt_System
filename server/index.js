import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from "./routes/User.js";

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo db")
    }
    catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () =>
{
    console.log("MongoDB disconnected !")
})


// middleware

app.use(express.json());

app.use(cors());


app.use("/user", userRoute);

app.listen(8800, () => {
    connect()
    console.log('Server started on 8800');
})