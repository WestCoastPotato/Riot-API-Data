// This page queries the riot API using the HTTP request code and returns the files out as JSON

// URL for the api call to get the summoner information
var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/JuiMin';

// Import the http get script from files
const httpGetModule = require('./http-get.js');

// Options for the HTTP request
// Includes method and header info as well as credentials
var options = {
	method: "GET",
	credentials: "same-origin"
}

// Run the api call
let summonerJSON = httpGetModule.fetchURLData(url, options);

// Log the data that we get back from the api call
// console.log(summonerJSON);
