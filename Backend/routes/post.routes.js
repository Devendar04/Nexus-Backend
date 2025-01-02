const express = require('express');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  addComment,
  updateTimestamp,
} = require('../controllers/post.controller');

const router = express.Router();

// CRUD operations
router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

// Additional operations
router.post('/:id/like', likePost);
router.post('/:id/comment', addComment);
router.post('/:id/timestamp', updateTimestamp);

module.exports = router;
