
const BlogPost = require('../models/post');
const Comment = require('../models/comment')


const addComment = async(req, res) => {
    try {
        const {blogPostId, content, authorId} = req.body;
        const blogPost = await BlogPost.findById(blogPostId);
        if(!blogPost) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        const newComment = new Comment({
            content,
            author: authorId
        })

        const result = await newComment.save();

        
        if(!result) {
            return res.status(500).json({
                message: "Failed to create Comment. Internal Server Error"
            })
        }

        const updatePost = await BlogPost.findOneAndUpdate(
            {_id: blogPostId},
            {$push: {comments: result._id}},
            {new: true}
        )

        if(!updatePost) {
            return res.status(500).json({
                message: "Failed to Add Comment in post. Internal Server Error"
            })
        }

        return res.status(200).json({
            message: "Add new comment Successfully",
            "Updated Post": updatePost
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}

const getAllComments = async (req, res) => {
    try {
        const {blogPostId} = req.query;
        const blogPost = await BlogPost.findById(blogPostId).populate({
            path: 'comments',
            populate: {path: 'author', select: 'username'}
        })

        if(!blogPost) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        res.status(200).json({
            message: "Retrieve Comments Successfully",
            "comments": blogPost.comments
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
    getAllComments,
    addComment
}