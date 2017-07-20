// Set-up Access to the Riot API
var KEY = 'RGAPI-3dcb37b4-c1b9-4c8d-af30-8223d9256298';

// Import whatwg-fetch
var fetchModule = require('whatwg-fetch');

// Check that the api responded with something that we need
function status(response) {
	if (response.status != 200) {
		console.log("HTTP Status Code:" + response.status);
		return Promise.reject(new Error(response.statusText));
	} else {
		return Promise.resolve(response);
	}
}

function json(response) {
	return response.json();
}

// Insert the API Key into the URL
function composeURL(url) {
	return url + KEY + "other stuff";
}

// Perform the HTTP request to the fetch API
// Promises used for asynch tasking and error catching
exports.fetchURLData = function(url, options) {
	fetchModule.fetch(composeURL(url), options)
	.then(status)
	.then(json)
	.then(function(data) {
		console.log('Reqest Succeeded with response: ', data);
		return data;
	}).catch(function(err) {
		// Error is thrown, logging error
		console.log('Fetch Error', err);
		return err;
	});
}
