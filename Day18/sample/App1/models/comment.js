const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'user'
    },
})

module.exports = mongoose.model('comment', commentSchema)