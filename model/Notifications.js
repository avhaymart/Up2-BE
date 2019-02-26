const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  eventID: Number,
  date: {
    type: Date,
    default: Date.now()
  },
  author: String
});

const Notification = mongoose.model("Comment", notificationSchema);

module.exports = Notification;
