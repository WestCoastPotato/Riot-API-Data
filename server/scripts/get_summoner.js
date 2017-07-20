// This page queries the riot API using the HTTP request code and returns the files out as JSON

// URL for the api call to get the summoner information
var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/JuiMin';

// Import the http get script from files
var httpGetModule = require('./http-get.js');

// Options for the HTTP request
// Includes method and header info as well as credentials
let options = {
	method: "GET",
	credentials: "same-origin"
}

// Test the call with a temp variable
var summonerJSON = httpGetModule.fetchURLData(url, options);
