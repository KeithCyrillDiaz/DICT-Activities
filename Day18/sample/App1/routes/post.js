const express = require('express');
const PostController = require('../controllers/postController');
const authMiddleware = require('../middleware/tokenVerification')
const router = express.Router();

router.post('/create', authMiddleware, PostController.createPost);


module.exports = router