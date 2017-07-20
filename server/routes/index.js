var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("GET request received");
});

router.get('/hello', function(req, res, next) {
  res.send("GET request received for hello");
});

router.get('/there', function(req, res, next) {
  res.send("GET request received for there");
});


module.exports = router;
