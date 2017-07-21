// Set-up Access to the Riot API
const API_KEY = 'api_key=' + 'RGAPI-9c7690c4-8441-4d29-a894-9761bab4ca58';

// Import whatwg-fetch
var fetchModule = require('whatwg-fetch');

// Check that the api responded with something that we need
function status(response) {
	if (response.status != 200) {
		console.log("HTTP Status Code:" + response.status);
		return Promise.reject(new Error(response.statusText));
	} else {
		console.log("HTTP 200");
		return Promise.resolve(response);
	}
}

function json(response) {
	return response.json();
}

// Insert the API Key into the URL
function composeURL(url) {
	return url + API_KEY;
}

// Perform the HTTP request to the fetch API
// Promises used for asynch tasking and error catching
exports.fetchURLData = function(url, options) {
	fetchModule.fetch(composeURL(url), options)
		.then(function(response) {
			if (response.status != 200) {
				console.log("HTTP Status Code: " + response.status);
			} else {
				console.log("Http Status 200");
				return response.blob();
			}
		}).catch(function(err) {
			// Error is thrown, logging error
			console.log('Fetch Error', err);
			return err;
		}
	);
}
