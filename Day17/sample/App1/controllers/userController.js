const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const existingEmail = await User.findOne({email});
        if(existingEmail) {
            return res.status(409).json({error: "Email already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        const result =  await user.save();
        if(!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }

        res.status(201).json({
            message: "registered sucessfully",
            result
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}


const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const validPassword = await bcrypt.compare(password, existingUser.password);
        if(!validPassword) {
            return res.status(401).json({
                message: 'Unauthorized User'
            })
        }

        const token = jwt.sign({userId: existingUser._id}, process.env.JWT_SECRET);

        return res.status(200).json({
            message: "Log In Successfully",
            token
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}


const changeUserPassword = async (req, res) => {
    try {
        const {email,  newPassword} = req.body;

        const existingEmail = await User.findOne({email});

        if(!existingEmail) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        const salt = await bcrypt.genSalt(10);
        const newPass = await bcrypt.hash(newPassword, salt);

        const result = await User.findOneAndUpdate(
            {email},
            {password: newPass},
            {new: true}
        )

        if(!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }

        return res.status(200).json({
            message: "Password Updated Successfully",
            "old Account": existingEmail,
            "updated Account": result
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const changeEmail = async (req, res) => {
    try {
        const {email, newEmail} = req.body;

        const existingEmail = await User.findOne({email});

        if(!existingEmail) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        const result = await User.findOneAndUpdate(
            {email},
            {email: newEmail},
            {new: true}
        )

        if(!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }

        return res.status(200).json({
            message: "Email Updated Successfully",
            "old Account": existingEmail,
            "updated Account": result
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

module.exports = {
    register,
    login,
    changeUserPassword,
    changeEmail,

}