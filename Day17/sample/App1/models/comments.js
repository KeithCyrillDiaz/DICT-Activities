const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    content: {
        type: String, 
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    },
})


module.exports = mongoose.model('comments', commentsSchema);

