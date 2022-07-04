// import express from 'express';
// import { createUser } from '../controller/user.js';

const express = require('express');
const { createUser } = require('../controller/user');

const router = express.Router();

//create user

router.post("/",createUser);

module.exports = router; 