// This page contains the app structure for the server

// Import express JS packages
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// Import parsers for different objects
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Require the routing pages
var index = require('./routes/index');
var api = require('./routes/api');
var search = require('./routes/search');

// Start express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set the application to use all routing pages
app.use('/api', api);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// Run testing API
var tester = require("./test/testAPI.js");
tester.userSearchTest();

// Export the app
module.exports = app;
