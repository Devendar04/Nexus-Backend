const Post = require('../models/post.model');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { author, avatar, content, image,title,category,tags,visibility } = req.body;
    const newPost = new Post({ author, avatar, content, image,title,category,tags,visibility });
    await newPost.save();
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error: error.message });
  }
};

// Get a post by ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error: error.message });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error: error.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
};

// Like a post
const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post liked successfully', likes: post.likes  });
  } catch (error) {
    res.status(500).json({ message: 'Error liking post', error: error.message });
  }
};

// Add a comment
const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const post = await Post.findByIdAndUpdate(
      id,
      { $push: { comments: { text: comment, timestamp: new Date() } } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Comment added successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error: error.message });
  }
};

// Update the timestamp
const updateTimestamp = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, { timestamp: new Date() }, { new: true });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Timestamp updated successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Error updating timestamp', error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  addComment,
  updateTimestamp,
};
