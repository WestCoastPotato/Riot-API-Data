// Use strict javascript
"use strict";

// Import dependencies
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("This is the home page of the application. Should redirect to the front end application");
});

// Route everything else back to the front end if we don't recognize it
router.get("*", function(req,res,next) {
  // Route to the react app
  res.redirect("back");
});

// Export the router
module.exports = router;
