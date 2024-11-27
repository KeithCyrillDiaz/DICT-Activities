const mongoose = require("mongoose");
const User = require("../models/user");
const Post = require('../models/post');
const Comment = require('../models/comments');
const comments = require("../models/comments");
const post = require("../models/post");

const createComment = async (req, res) => {
    try {
        const {id: ownerId} = req.params
        const {content, postId} = req.body;

        if(!content || !ownerId || content === '' || !postId) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        if (!mongoose.Types.ObjectId.isValid(ownerId) ||  !mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).json({
                message: "Invalid ownerId format"
            });
        }

        const existingUser = await User.findById(ownerId);
        const existingPost = await Post.findById(postId);

        if(!existingUser) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        if(!existingPost) {
            return res.status(404).json({
                message: "Post Not Found"
            });
        }

        const newComment = new Comment ({
            content,
            ownerId
        })

        const result = await newComment.save();

        if(!result) {
            return res.status(500).json({
                message: "Failed to create Comment. Internal Server Error",
            })
        }

        const commentID = result._id;

        const updatedPost = await Post.findOneAndUpdate(
            {_id: postId},
            {$push: {comments: commentID}},
            {new: true}
        ).populate({
            path: 'comments',
            populate: {
                path: 'ownerId',
                model: 'user'
            }
        })

        if(!updatedPost) {
            return res.status(500).json({
                message: "Failed to add comment in post. Internal Server Error",
            })
        }

        return res.status(201).json({
            message: "Comment Added Successfully",
            "Post With Comment": updatedPost
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const retrieveAllCommentByPostId = async (req, res) => {
    try {
        const{id} = req.params;

        if(!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const result = await Post.findById(id).populate({
            path: 'comments',
            populate: {
                path: 'ownerId',
                model: 'user'
            }
        })

        if(!result) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        return res.status(201).json({
            message: "All Comments of a Post Retrieved Successfully",
            comments: result.comments
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}
const updateComment = async (req, res) => {
    try {
        const {id} = req.params
        const {content, postId} = req.body;
        
        if(!id || !postId || !content || content === "") {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const existingPost = await Post.findById(postId);
        const existingComment = await Comment.findById(id);

        if(!existingPost) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        if(!existingComment) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }

        const result = await Comment.findOneAndUpdate(
            {_id: id},
            {content},
            {new: true}
        )

        if(!result) {
            return res.status(404).json({
                message: "Failed to Update Comment, Internal Server Error",
            })
        }

        return res.status(201).json({
            message: "Update Comment Successfully",
            "old Comment": existingComment,
            "updated Comment": result
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const deleteComment = async (req, res) => {
    try {
        
        const {id} = req.params;
        const {postId} = req.body;

        if(!id || !postId) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        if(!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).json({
                message: "Bad Request"
            })
        }

        const existingPost = await Post.findById(postId);
        if(!existingPost) {
            return res.status(404).json({
                message: "Post Not Found",
            })
        }
        
        const result = await Comment.findByIdAndDelete(id);

        if(!result) {
            return res.status(500).json({
                message: "failed to delete comment. Internal Server Error",
            })
        }

        
        const updatedPost = await Post.findOneAndUpdate(
            {_id: postId},
            {$pull: {comments: id}},
            {new: true}
        )

        if(!updatedPost){
            return res.status(404).json({
                message: "Failed to Update Post, Internal Server Error",
            })
        }

        return res.status(201).json({
            message: "Comment Deleted  Successfully",
            "Deleted Comment": result,
            "Updated Post": updatedPost
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
    createComment,
    retrieveAllCommentByPostId,
    updateComment,
    deleteComment
}