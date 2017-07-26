// This page contains a collection of tests for testing out the API

// Use strict javascript
"use strict";

// Import the assertion from mocha
var assert = require('assert');

// Exports the testing script
exports.userSearchTest = function() {
  // Test the user lookup
  // Import the functions from summoner name search (search by username)
  let userSearch = require("../scripts/summonerNameSearch.js");
  // Import the functions from the matchlist gathering service
  let matchList = require("../scripts/matchListGather.js");

  userSearch.searchSummoner("JuiMin")
    .then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err); // Throw error if there is a problem with the data
    });
  // userSearch.searchSummoner("Kryowing"); // User ID = 45188697 (json.accountid)

  // Test the match list lookup
  // matchList.getList("39989015", false); // JuiMin
  // matchList.getList("45188697", false); // Kryowing
}
