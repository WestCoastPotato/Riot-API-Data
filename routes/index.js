// Use strict javascript
"use strict";

// Import dependencies
var express = require('express');
var router = express.Router();
var path = require('path');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Route everything else back to the front end if we don't recognize it
router.get("*", function(req,res,next) {
  // Route to the react app
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Export the router
module.exports = router;
