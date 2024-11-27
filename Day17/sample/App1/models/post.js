const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'user'
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'comments'
    }
})


module.exports = mongoose.model('posts', postSchema);

