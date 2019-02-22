var express = require("express");
var router = express.Router();

// ====================
// GET Req of Events
// ===================
router.get("/", function(req, res, next) {
  res.send("Events API");
});

module.exports = router;
