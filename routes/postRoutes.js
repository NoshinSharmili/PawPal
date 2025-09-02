const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post
router.post('/', postController.createPost);
// Get all posts
router.get('/', postController.getAllPosts);
// Get post by id
router.get('/:id', postController.getPostById);
// Update reactCount
router.patch('/:id/react', postController.updateReactCount);
// Delete post
router.delete('/:id', postController.deletePost);

module.exports = router;
