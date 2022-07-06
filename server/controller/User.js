// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import { createError } from '../utils/error.js';


const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken')


// create user
exports.addUserDetails = async (req, res,next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, process.env.JWT);
        const userId = decodedData?.id;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const updateUser = await User.findByIdAndUpdate(
            userId,
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateOfBirth: req.body.dateOfBirth,
                mobile: req.body.mobile,
                password: hash
            },
            { new: true }
        );

            res.status(200).json(updateUser)
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

const generator = require('generate-password');
const sendMail = require('../utils/sendEmail')

// create user by admin

exports.register = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user)
            return next(createError(400, "User exists !"));
        
        const password = generator.generate({
            length: 10,
            numbers: true
        });
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            email: req.body.email,
            password: hash,
            accountType: req.body.accountType,
        
        }); 

        const savedUser = await newUser.save()
        
        await sendMail(newUser.email,"Login credential for notes management system", password)
            res.status(200).json(savedUser)
    }
    catch (err)
    {
        next(createError(400, err));
    }
}
