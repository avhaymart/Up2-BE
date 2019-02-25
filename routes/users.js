var express = require("express");
var bodyParser = require('body-parser')
var router = express.Router();
const User = require("../model/User");

router.post("/", (req, res) => {
    const data = req.body;
    
    User.create({
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        password: data.password,
    }).then((stuff) => {
        console.log(User.find());
        res.sendStatus(200);
    }).catch(err => console.log(err));
    

});

router.put("/", (req, res) => {
    const data = req.body;
    
    User.find({
        username: data.username,
        password:data.password
    }).then((data) => {
        console.log(data)
        try {
            if (data[0]._id && data[0].username && data[0].password && data[0].last_name && data[0].first_name) {
                console.log("User exists", data)
                res.send(data)
            }
        } catch (error) {
            console.log("User doesn't exist." , data)
            res.sendStatus(500)
        }
    })
    

});

module.exports = router;
