const BlogPost = require('../models/post');
const express = require('express');



const createPost = async (req, res) => {
    try {
        const {title, content, categories, tags} = req.body;
        const {userId} = req;
        console.log(`userID: ${userId}`);

        const blogPost = new BlogPost({
            title,
            content,
            author: userId,
            categories,
            tags
        })

        const result = await blogPost.save()

        res.status(201).json({
            message: "Created Post Successfully",
            result
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const getAllPost = async (req, res) => {
    try {
        const result = await BlogPost.find();
        res.status(200).json({message: "retrieve posts successfully", result})
    } catch (error) {
        return res.status(500).json({   
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
            return res.status(500).json({
                message: "Failed to Update Post, Internal Server Error",
            })
        }

        return res.status(201).json({
            message: "Post Updated Successfully",
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

        if(!id) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

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
    getAllPost,
    retrievePostById,
    updatePost,
    deletePost
}