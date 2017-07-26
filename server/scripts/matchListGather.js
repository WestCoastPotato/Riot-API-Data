// This page should use the given summoner ID to query for all the matches
// played by the given player

// Upon successful search, add the matches by match id into the matches table
// THE PROGRAM SHOULD FIRST QUERY FOR THE LIST OF MATCHES AND SEE WHICH ONES EXIST
  // This will lessen the load on API calls

// Query the API for everything that we get from the
// The function takes in the user ID for the summoner as a string and whether the
// user wants ranked games or the last twenty games from the matchlist
// Last 20 games includes normal games
exports.getList = function(userID,ranked) {
  // Import the http get script from files
  let requester = require('./httpGetRequester.js');
  // Base URLs for getting match lists
  let baseUrl = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/";
  // Test if the user wants all ranked games or the last 20 games by the user
  if (ranked) {
  	var preparedUrl = baseUrl + userID + '?';
  } else {
    var preparedUrl = baseUrl + userID + "/recent?";
  }
  // Run the query and input the next function
  requester.apiRequest(preparedUrl, function(matchlist) {
    console.log(matchlist);
  });
}
