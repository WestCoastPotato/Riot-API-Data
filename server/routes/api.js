// Setup api for this website
// This is future stuff so don't worry about it yet

// Use strict javascript
"use strict";

// Import express and the router
var express = require('express');
var router = express.Router();

// Require scripts from scripts folder for interfacing with RIOT API
var nameSearch = require("../scripts/summonerNameSearch.js");

// Route to the main page of a searched user
router.get('/user/:userID', function(req, res, next) {
  // This will need to trigger a script that checks to see if the user is in the system

  // If the user is in the system -- grab their data and populate the application
    // Send data to react

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
  res.status(200).send(
    "Welcome to the application API. " +
    "If you try localhost on port 3001 (localhost:3001), userId search is available. " +
    "Ex: localhost:3001/user/JuiMin"
  );
});

/* GET api home page. */
router.get('/*', function(req, res, next) {
  // Redirect to react app
  res.redirect("/api/");
});

// Export the router
module.exports = router;
