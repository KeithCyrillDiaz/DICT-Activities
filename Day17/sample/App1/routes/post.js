const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

router.post('/create/:id', PostController.createPost);

router.get('/retrieve', PostController.retrieveAllPost);
router.get('/retrieve/:id', PostController.retrievePostById);

//update
router.put('/update/:id', PostController.updatePost);
router.delete('/delete/:id', PostController.deletePost);


module.exports = router