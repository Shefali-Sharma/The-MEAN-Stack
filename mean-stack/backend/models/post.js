const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: {ype: String, default: true }
});

module.exports = mongoose.model('Post', postSchema);
