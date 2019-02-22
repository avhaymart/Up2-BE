const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  first_name: String,
  last_name: String,
  date: Date,
  title: String,
  description: String,
  image: String,
  value: Number,
  hashtag: String
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;