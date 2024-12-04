const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User ({
            name,
            email, 
            password: hashedPassword,
        })

        await user.save();
        res.status(201).json({message: 'User registered Successfully'})
    
    
    } catch (error) {
        next(error);
    }
}



const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(404).json({message: 'Unauthorized User'})
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.status(200).json({token});

    } catch (error) {
        next(error);
    }
}
module.exports = {
    register,
    login
}