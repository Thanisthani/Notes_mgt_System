// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { createError } from '../utils/error.js';


const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { createError } = require('../utils/error')


// create user
exports.createUser = async (req, res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            mobile: req.body.mobile,
            status: req.body.status,
            password: hash,
            accountType: req.body.accountType,
        
        }); 

            const savedUser = await newUser.save()
            res.status(200).json(savedUser)
    }
    catch (err)
    {
        next(createError(400, err));
    }
}

// get all user

exports.getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err)
    {
        next(createError(400, err));
    }

}

// get particular user

exports.getOneUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id
        );
        res.status(200).json(user);
    }
    catch (err)
    {
        next(createError(400, err));
    }
}

