// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import userRoute from "./routes/user.js";
// import authRoute from "./routes/auth.js"

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();


// mongoDB
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
app.use("/auth", authRoute);

app.listen(8800, () => {
    connect()
    console.log('Server started on 8800');
})