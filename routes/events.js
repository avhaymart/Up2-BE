var express = require("express");
var router = express.Router();
const Event = require('../model/Event');

// ====================
// GET Req of Events
// ===================
router.get('/events', (req, res, next) => {
  Event.find({}, "action")
    .then(data => res.json(data))
    .catch(next)
});

// ====================
// POST Req of Events
// ===================
router.post('/events', (req, res, next) => {
  Event.create(req.body)
    .then(data => res.json(data))
    .catch(next)
});

// ====================
// DELETE Req of Events
// ===================
router.delete('/events/:id', (req, res, next) => {
  Event.findOneAndDelete({ "_id": req.params.id })
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
