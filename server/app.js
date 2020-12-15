var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var indexRouter = require('./routes/index');

const keys = require("./config/keys")
require("./model/CrewModel");
//require("./model/counterModel");



mongoose.connect(keys.mongoURI,{useNewUrlParser: true}).then(() => console.log('we are connect')).catch((err) => console.log(err));
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require("./routes/crewRoute")(app);
app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"))
  //const path = require("path");
  app.get("*", (req,res) =>{
      res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}

module.exports = app;
