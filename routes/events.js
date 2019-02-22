var express = require("express");
var router = express.Router();
const Event = require("../model/Event");

// ====================
// GET Req of Events
// ===================
router.get("/", (req, res, next) => {
  Event.find()
    .then(data => res.json(data))
    .catch(err =>
      res.status(500).json({ err: "Something went wrong at server side" })
    );
});

// ====================
// POST Req of Events
// ===================
router.post("/", (req, res) => {
  Event.create(req.body)
    .then(data => {console.log("data before hitting server", data)
    res.json(data)})
    .catch(err => console.log(err));
});

// ====================
// DELETE Req of Events
// ===================
router.delete("/:id", (req, res, next) => {
  Event.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
