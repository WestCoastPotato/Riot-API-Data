// This page queries the riot API using the HTTP request code and returns the files out as JSON

// URL for the api call to get the summoner information
var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';

// Import the http get script from files
var requester = require('./httpGetRequester.js');

// Takes in a String variable that should be the summoner's screen name.
// This feeds the name into an API query URL and uses the requester to query the API
exports.searchSummoner = function (name) {
	url += name + '?';
	requester.apiRequest(url, function(json) {
		// Do something with the json data that is returned
		console.log(json);
	});
}
