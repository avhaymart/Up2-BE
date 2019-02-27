const db = require("../model");

//Methods for comment controls
module.exports = {
  findById: function(req, res) {
    db.Comment.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: async function(req, res) {
    let dbReady = {
      comment: req.body.comment,
      postDate: Date.now(),
      author: req.body.author
    };
    // db.Comment.create(dbReady)
    //   .then(async dbModel => await res.send(dbModel))
    //   // .then(res.sendStatus(200))
    //   .catch(err => res.status(422).json(err));
    let result;

     await db.Comment.create(dbReady, (err, model) => {
      if (err) return err;
      result = model;
    })

   // Create notification using comment author
    const notification = {
      event: req.body.eventID,
      date: Date.now(),
      author: req.body.comment.author
    };
    // Push to users to be updated
     await db.Event.updateOne(
      { _id: req.body.eventID },
      { $push: { users: req.body.comment.author, comments: req.body.comment } }
    );
    // Push to each users notification document

    // I commented this out because db.find isn't a function.
    // example db.Event.find ... I didn't know what collection
    // you're trying to search in, but this function doesn't
    // work right :c

    // await db.find({ _id: req.body.eventID }, (dbModel) => {
    //   dbModel.users.forEach(user => {
    //     db.User.update({ _id: user }, { $push: { notifications: notification } });
    //   });
    // });

    res.json(result)
  },

  remove: function(req, res) {
    db.Comment.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
