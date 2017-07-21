// Set-up Access to the Riot API
var KEY = 'RGAPI-3dcb37b4-c1b9-4c8d-af30-8223d9256298';
var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/JuiMIn';

// Set the options for the HTTP request
var options = {
	method: "GET",
	credentials: "same-origin"
}

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

// Return the response json
function json(response) {
	return response.json();
}

// Perform the HTTP request to the fetch API
// Promises used for asynch tasking and error catching
fetchModule.fetch(url, options)
	.then(status)
	.then(json)
	.then(function(data) {
		console.log('Reqest Succeeded with response: ', data);
	}).catch(function(err) {
		// Error is thrown, logging error
		console.log('Fetch Error', err);
	});
