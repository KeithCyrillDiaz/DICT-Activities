const express = require('express');
const CommentController = require('../controllers/commentController');

const router = express.Router();

router.post('/create/:id', CommentController.createComment);

router.get('/retrieve/:id', CommentController.retrieveAllCommentByPostId);

//update
router.put('/update/:id', CommentController.updateComment);
router.delete('/delete/:id', CommentController.deleteComment);


module.exports = router