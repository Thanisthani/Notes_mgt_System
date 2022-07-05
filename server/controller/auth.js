// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { createError } from '../utils/error.js';
// import jwt from 'jsonwebtoken';


const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { createError } = require('../utils/error')
const jwt = require('jsonwebtoken')

// login user

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return next(createError(400, "User not found !"));
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password,
            user.password)
        

        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or email"));
        
        const token = jwt.sign({ email: user.email, id: user._id, accountType: user.accountType }, process.env.JWT); //get token
        
        res.status(200).json({user,token});
    }
    catch (err)
    {
        next(createError(500, err));
    }
}