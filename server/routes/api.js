// Setup api for this website
// This is future stuff so don't worry about it yet

// Use strict javascript
"use strict";

// Import express and the router
var express = require('express');
var router = express.Router();

// Require scripts
var summonerNameSearch

// Route to the main page of a searched user
router.get('/user/:userID', function(req, res, next) {
  // This will need to trigger a script that checks to see if the user is in the system

  // If the user is in the system -- grab their data and populate the application
    // Send data to react
  let nameSearch = require("../scripts/summonerNameSearch.js");
  nameSearch.searchSummoner(req.params.userID)
    .then(function(response) {
      res.status(200).send(response);
    })
    .catch(function(err) {
      res.send(err);
    });
  // If the user is new then you should return that they haven't used the application yet
  // res.status(200).send(nameSearch.searchSummoner());
});

// Routes the user to a match
router.get('/match/:matchID', function(req, res, next) {
  // Send the user match data
    // If match exists send data

    // If the match doesn't exist then tell the user
    res.status(200).send("{ " + req.params.matchID + ": Not in System }");
});

/* GET api home page. */
router.get('/', function(req, res, next) {
  // Redirect to react app
  res.status(200).send("Welcome to the application API");
});

/* GET api home page. */
router.get('/*', function(req, res, next) {
  // Redirect to react app
  res.redirect("/api/");
});

// Export the router
module.exports = router;
