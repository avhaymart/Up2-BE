const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  date: {
    type: Date,
    default: Date.now()
  },
  author: String
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;