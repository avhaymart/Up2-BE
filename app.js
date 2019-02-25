var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const connect = require("./DB/connect");

const eventsRoute = require("./routes/events");
const tagsRoute = require("./routes/tags");
const usersRoute = require("./routes/users");

var app = express();
// connect to DB
connect();

// Helps cross origin connection
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// =====================
// Linking Routes here
// ======================

app.use("/api/events", eventsRoute);
app.use("/api/tags", tagsRoute);
app.use("/api/users", usersRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(404).send("Sorry can't find that!")
  res.send("error");
});

module.exports = app;
