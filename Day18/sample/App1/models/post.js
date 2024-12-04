const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    content: {
        type: String, 
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'user'
    },
    tags: [
        {
            type: String, 
        }
     ],

     categories: [
        {
         type: String, 
        }
     ],

    comments: [
       {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'comments'
       }
    ], 

},  {timestamps: true}
)


module.exports = mongoose.model('posts', postSchema);

