const db = require("../model");

//Methods for comment controls
module.exports = {
  findById: function(req, res) {
    db.Comment.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    let dbReady = {
      comment: req.body.comment,
      postDate: Date.now(),
      author: req.body.author
    };
    db.Comment.create(dbReady)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

   // Create notification using comment author
    const notification = {
      event: req.body.eventID,
      date: Date.now(),
      author: req.body.comment.author
    };
    // Push to users to be updated
    db.Event.update(
      { _id: req.body.eventID },
      { $push: { users: req.body.comment.author, comments: req.body.comment } }
    );
    // Push to each users notification document
    db.find({ _id: req.body.eventID }).then(dbModel => {
      dbModel.users.forEach(user => {
        db.User.update({ _id: user }, { $push: { notifications: notification } });
      });
    });
  },
  remove: function(req, res) {
    db.Comment.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
