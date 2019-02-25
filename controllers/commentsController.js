const db = require('../model');

//Methods for comment controls
module.exports = {
    findById: function (req, res){
        db.Comment
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res){
        let dbReady ={
            comment: req.body.comment,
            postDate: Date.now()
        }
        db.Comment
            .create(dbReady)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res){
        db.Comment
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};