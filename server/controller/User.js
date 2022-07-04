import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
// create user
export const createUser = async (req, res,next) => {
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