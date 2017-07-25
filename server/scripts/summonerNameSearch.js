// This page queries the riot API using the HTTP request code and returns the files out as JSON

// Takes in a String variable that should be the summoner's screen name.
// This feeds the name into an API query URL and uses the requester to query the API
exports.searchSummoner = function (name) {
	// Import the http get script from files
	let requester = require('./httpGetRequester.js');

	// URL for the api call to get the summoner information
	let byNameUrl = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';

	// Set the url with the input name
	let preparedUrl = byNameUrl + name + '?';

	// Run the query through the requester
	requester.apiRequest(preparedUrl, function(summoner) {
		// Do something with the json data that is returned

		// Print out the name and id to console to confirm the user's account
		console.log(summoner);

		// Check if the database contains this user
		// IF EXISTS:
			// DO NOT UPDATE THE USER TABLE
			// UPDATE THE MATCHLIST DATABASE AND GET THE MATCHES THAT ARNE'T IN THE database
	  //IF NOT EXISTS:
			// UPDATE THE USER TABLE WITH THE NEW USER
			// GET MATCHLIST AND ADD ALL MATCHES

	});
}
