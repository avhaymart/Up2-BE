const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  first: String,
  last: String,
  date: {
    type: Date,
    default: Date.now()
  },
  title: String,
  description: String,
  image: String,
  value: Number
  // hashtag: String
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;