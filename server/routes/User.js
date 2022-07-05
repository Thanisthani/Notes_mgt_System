// import express from 'express';
// import { createUser } from '../controller/user.js';

const express = require('express');
const { createUser,getAllUser,getOneUser } = require('../controller/user');

const router = express.Router();

const {auth} = require("../middleware/auth"); //middleware

//create user

router.post("/", createUser);

// get all user
router.get("/", auth,getAllUser);

// get one user

router.get("/:id", auth, getOneUser);


module.exports = router; 