// This file exports the HTTP request function that utilizes fetch.
// Other files can use this function to send API requests
// with a passed in URL, HTTP options, and output function

// Use strict javascript
"use strict";
// Import fetch from the node-fetch package
var fetch = require('node-fetch');

// Set the RIOT API key -- expires every day
const API_KEY = 'RGAPI-18316c61-98ff-4568-92b4-18570a140695';

// Check that the api responded with something that we need
function statusCheck(response) {
	if (response.status != 200) {
		// If HTTP code is not 200 throw an error
		var error = new Error(response.statusText);
		error.response = response;
		throw error;
	} else {
		// Return the response if the API gives a code of 200
		return response;
	}
}

// Takes in the API request URL and the desired function for the result JSON
// and sends an HTTP request to the RIOT API server. If this request succeeds, the
// passed in function is run with the response JSON

// Returns a promise
exports.apiRequest = function(url) {
	return fetch(url + 'api_key=' + API_KEY)
		// Check the status of the api call
		.then(statusCheck)
		// Check the response of the api call
		.then(function(response) {
			// Returns the response json
			return response.json();
		}).then(function(json) {
			return json;
		}).catch(function(error) {
			// If the promises reach an error then log the error on the console
			console.log(error);
		});
}
