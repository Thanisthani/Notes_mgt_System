// import express from 'express';
// import { createUser } from '../controller/user.js';

const express = require('express');
const {getAllUser,getOneUser,register,addUserDetails } = require('../controller/user');

const router = express.Router();

const {auth, authRole} = require("../middleware/auth"); //middleware

//create user

router.post("/add", addUserDetails);
// 
// get all user
router.get("/", auth,authRole("Admin"),getAllUser);

// get one user

router.get("/:id", auth, getOneUser);

// create user by admin

router.post("/register" , auth,register);

module.exports = router; 