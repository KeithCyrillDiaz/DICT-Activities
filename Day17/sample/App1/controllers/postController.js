const mongoose = require("mongoose");
const User = require("../models/user");
const Post = require('../models/post');


const createPost = async (req, res) => {
    try {
        const {id: ownerId} = req.params
        const {content} = req.body;

        if(!content || !ownerId || content === '') {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        if (!mongoose.Types.ObjectId.isValid(ownerId)) {
            return res.status(400).json({
                message: "Invalid ownerId format"
            });
        }

        const existingUser = await User.findById(ownerId);

        if(!existingUser) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const newPost = new Post ({
            content,
            ownerId
        })

        const result = await newPost.save();

        if(!result) {
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }

        return res.status(201).json({
            message: "Post Created Successfully",
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

const retrieveAllPost = async (req, res) => {
    try {
        const result = await Post.find()
        .populate('ownerId');
        if(!result) {
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }

        if(result.length === 0) {
            return res.status(404).json({
                message: "No Post Found",
            })
        }

        return res.status(201).json({
            message: "All Post Retrieved Successfully",
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

const retrievePostById = async (req, res) => {
    try {
        const{id} = req.params;

        if(!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const result = await Post.findById(id).populate('ownerId');
        if(!result) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        return res.status(201).json({
            message: "All Post Retrieved Successfully",
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
const updatePost = async (req, res) => {
    try {
        const{id} = req.params;
        const {content} = req.body;
        
        if(!id || !content || content === "") {
            return res.status(400).json({
                message: "Bad Request"
            })
        }
        const existingPost = await Post.findById(id).populate('ownerId');

        if(!existingPost) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        const result = await Post.findOneAndUpdate(
            {_id: id},
            {content},
            {new: true}
        )

        if(!result) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        return res.status(201).json({
            message: "All Post Retrieved Successfully",
            "old Post": existingPost,
            "updated Post": result
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const deletePost = async (req, res) => {
    try {
        
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const result = await Post.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        return res.status(201).json({
            message: "Post Deleted  Successfully",
            "Deleted Post": result
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
    createPost,
    retrieveAllPost,
    retrievePostById,
    updatePost,
    deletePost
}