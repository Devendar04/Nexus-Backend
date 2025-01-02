const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] }, // Array of tag strings
  visibility : { type: String, required: true},
  content: { type: String, required: true },
  image: { type: String },
  likes: { type: Number, default: 0 },
  comments: { type: Array, default: [] }, // Array of comment objects
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
