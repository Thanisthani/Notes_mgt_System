// import mongoose from "mongoose";


const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    mobile: {
        type:Number
    },
    status: {
      type:Boolean  
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String
    }
});

module.exports = mongoose.model("User", UserSchema);