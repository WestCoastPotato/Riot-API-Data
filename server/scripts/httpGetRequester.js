// Import fetch
var fetch = require('node-fetch');

// Set-up Access to the Riot API
const API_KEY = 'RGAPI-2169bdf3-61b4-4c08-b675-0705aa84f7a5';

// Check that the api responded with something that we need
function statusCheck(response) {
	if (response.status != 200) {
		// If HTTP code is not 200 throw an error
		var error = new Error(response.statusText);
		console.log("HTTP Status Code:" + response.status);
		error.response = response;
		throw error;
	} else {
		// Return the response if the API gives a code of 200
		return response;
	}
}

// Perform the HTTP request to the fetch API
// Promises used for asynch tasking and error catching
exports.fetchURLData = function(url, options, outputFunc) {
	fetch(url + 'api_key=' + API_KEY, options)
		// Check the status of the api call
		.then(statusCheck)
		// Check the response of the api call
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			// Do something with the response JSON
			outputFunc(json);
		// If the promises reach an error then log the error on the console
		}).catch(function(error) {
			console.log(error);
		});
}
