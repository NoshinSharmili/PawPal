const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  reactCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
