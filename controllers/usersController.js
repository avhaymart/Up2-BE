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
        const data = req.body;

        console.log(data)
        if (data.password === data.confirm_password) {
            db.User.find({
                username: data.username
            }).then((db_res) => {
                console.log(db_res)
                try {
                    if (db_res[0].username) {
                        console.log("Username already exists")
                        // the value 2 for fail means the user already exists
                        res.send({fail:2})
                    }
                } catch {
                    console.log("User doesn't exist yet")
                    db.User.create({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        username: data.username,
                        password: data.password,
                    }).then(() => {
                        console.log("User created");
                        res.send({fail:0})
                    }).catch(err => console.log(err));
                }
            })
        } else {
            // the value 1 for fail means passwords do not match
            res.send({fail:1})
        }


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