// Use strict javascript
"use strict";

// Import dependencies
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.redirect("http://localhost:3000");
  let urlComponents = req.headers.host.split(":");
  if (urlComponents[0] == "localhost") {
    res.redirect("http://localhost:3000");
    //res.send("This is the home page of the application. Should redirect to the front end application");
  } else {
    res.redirect(req.headers.host);
  }
});

// Route everything else back to the front end if we don't recognize it
router.get("*", function(req,res,next) {
  // Route to the react app
  res.redirect("back");
});

// Export the router
module.exports = router;
