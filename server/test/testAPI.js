// This page contains a collection of tests for testing out the API

// Exports the testing script
exports.userSearchTest = function() {
  // Test the user lookup
  // Import the functions from summoner name search (search by username)
  let userSearch = require("../scripts/summonerNameSearch.js");
  // Import the functions from the matchlist gathering service
  let matchList = require("../scripts/matchListGather.js");

  // userSearch.searchSummoner("JuiMin"); // User ID = 39989015 (json.accountid)
  // userSearch.searchSummoner("Kryowing"); // User ID = 45188697 (json.accountid)

  // Test the match list lookup
  matchList.getList("39989015", false);
  // matchList.getList("45188697", false);
}
