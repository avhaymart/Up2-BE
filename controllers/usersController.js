const db = require('../model');
var bodyParser = require('body-parser')
//Methods for user controls
module.exports = {
    find: function (req, res) {
        const data = req.body;

        db.User.find({
            username: data.username,
            password: data.password
        }).then((data) => {
            console.log(data)
            try {
                if (data[0]._id && data[0].username && data[0].password && data[0].last_name && data[0].first_name) {
                    console.log("User exists", data)
                    res.send(data)
                }
            } catch (error) {
                console.log("User doesn't exist.", data)
                res.sendStatus(500)
            }
        })
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // let dbReady ={
        //     id: id
        // }
        // db.User 
        //     .create(req.body)
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));

        const data = req.body;

        db.User.create({
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
            password: data.password,
        }).then((stuff) => {
            console.log(User.find());
            res.sendStatus(200);
        }).catch(err => console.log(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}