const mongoose = require('mongoose')


var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String,
})

var User = mongoose.model("User",  userSchema)

module.exports = User
