// Setup api for this website
// This is future stuff so don't worry about it yet

// Import express
var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
  res.redirect();
});

router.get('/user', function(req, res, next) {
  res.send("API get request received");
});

/* GET api home page. */
router.get('/', function(req, res, next) {
  res.send("API get request received");
});


module.exports = router;
