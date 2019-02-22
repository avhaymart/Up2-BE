const mongoose = require("mongoose");
// Mongoose connection goes here
// =============================

const url = "mongodb://localhost:27017/Up2";
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
