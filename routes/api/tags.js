var express = require("express");
var router = express.Router();
const Tag = require("../model/Tag");

router.get("/", (req, res) => {
  res.send("Tag is working");
});

module.exports = router;
