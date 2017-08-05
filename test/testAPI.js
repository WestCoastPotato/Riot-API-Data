// This page contains a collection of tests for testing out the API

// Use strict javascript
"use strict";

// Import the assertion from mocha
var fetchMock = require('fetch-mock');

// Exports the testing script
exports.userSearchTest = function() {
  // Test the user lookup
  // Import the functions from summoner name search (search by username)
  let userSearch = require("../scripts/summonerNameSearch.js");
  // Import the functions from the matchlist gathering service
  let matchList = require("../scripts/matchListGather.js");

  fetchMock.get('*', {
    id: 25392256,
    accountId: 39989015,
    name: 'JuiMin',
    profileIconId: 1450,
    revisionDate: 1500967133000,
    summonerLevel: 30
  });

  userSearch.searchSummoner("JuiMin")
    .then(function(data) {
      console.log("got data", data);
    }).catch(function(err) {
      console.log(err); // Throw error if there is a problem with the data
    });

  fetchMock.restore();
  // userSearch.searchSummoner("Kryowing"); // User ID = 45188697 (json.accountid)

  // Test the match list lookup
  // matchList.getList("39989015", false); // JuiMin
  // matchList.getList("45188697", false); // Kryowing
}
