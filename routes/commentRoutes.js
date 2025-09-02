const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/', commentController.createComment);
// Get all comments for a post
router.get('/post/:postId', commentController.getCommentsByPostId);
// Delete comment
router.delete('/:id', commentController.deleteComment);

module.exports = router; 
