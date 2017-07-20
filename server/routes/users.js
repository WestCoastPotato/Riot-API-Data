var express = require('express');
var router = express.Router();

/* GET users listing. */

// Leads to Stats about specific users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
