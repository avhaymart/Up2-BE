var express = require("express");
var router = express.Router();
const eventsController = require('../../controllers/eventsController');


router.get("/", (req, res) => {
  res.send("Tag is working");
});

module.exports = router;
