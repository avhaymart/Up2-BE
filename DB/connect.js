const mongoose = require("mongoose");
// Mongoose connection goes here
// =============================
const dotenv = require('dotenv').config()
const url = process.env.MONGO_DB;
const connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log("Connected To Database"))
    .catch(ex => console.error("Failed to connect to Database", ex));
};

module.exports = connect;
