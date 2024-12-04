const express = require('express');
const CommentController = require('../controllers/commentControllers');
const authMiddleware = require('../middleware/tokenVerification')
const router = express.Router();

router.post('/create', authMiddleware, CommentController.addComment);
router.get('/retrieve', authMiddleware, CommentController.addComment);


module.exports = router