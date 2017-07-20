// Set-up Access to the Riot API
var KEY = RGAPI-3dcb37b4-c1b9-4c8d-af30-8223d9256298;

// XHTTP
var request = new XMLHttpRequest();

request.open('GET', 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/JuiMIn');

// Set the request header's token to be the API key
request.setRequestHeader('X-Riot-Token', KEY);

// Send the HTTP request
request.send();
