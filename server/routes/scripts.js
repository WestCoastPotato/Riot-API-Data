// Use strict javascript
"use strict";

// Import dependencies
var express = require('express');
var router = express.Router();

// Require scripts from scripts folder for interfacing with RIOT API
var nameSearch = require("../scripts/summonerNameSearch.js");
var rankInfo = require("../scripts/rankInfo.js");

/* GET REQUEST FOR THE API SCRIPT CALL */
router.get('/summoner/:userID', function(req, res, next) {
  let urlComponents = req.headers.host.split(":");
  // If the user is in the system -- grab their data and populate the application
    // Send data to react
  nameSearch.searchSummoner(req.params.userID)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      res.send(err);
    });
});

// Export the router
module.exports = router;
