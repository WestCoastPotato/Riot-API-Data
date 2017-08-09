// This page queries the riot API using the HTTP request code and returns the files out as JSON

// Use strict javascript
"use strict";
// Takes in a String variable that should be the summoner's screen name.
// This feeds the name into an API query URL and uses the requester to query the API
exports.getMatches = function (id) {
	// Import the http get script from files
	let requester = require('./httpGetRequester.js');
	// URL for the api call to get the summoner information
	let url = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/';
	// Set the url with the input name
	let preparedUrl = url + id + '/recent?';
	// Run the query through the requester
	return requester.apiRequest(preparedUrl);
}
