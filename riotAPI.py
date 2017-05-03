import requests


api_key = '?api_key=RGAPI-6e2191cb-c314-4c48-af62-cf09d3ac6e1f'


# Get the ID for the current person
def getID(name):
	base_url = 'https://na.api.riotgames.com/api/lol/NA/v1.4/summoner/by-name/' + name
	response = requests.get(base_url + api_key)
	if response.status_code == 200:
		user_id = response.json()[name]['id']
		return user_id
	else:
		print('Error code on get summ id:' + response.status_code)


# Get the match list for the current summoner
def getMatchList(summID):
	base_url = 'https://na.api.riotgames.com/api/lol/NA/v2.2/matchlist/by-summoner/'
	response = requests.get(base_url + str(summID) + api_key)
	if response.status_code == 200:
		return response.json()['matches']
	else:
		print('Error code on get match list: ' + str(response.status_code))


# Get the data on the current match
def getMatchData(match_id):
	base_url = 'https://na.api.riotgames.com/api/lol/NA/v2.2/match/'
	response = requests.get(base_url + str(match_id) + api_key)
	if response.status_code == 200:
		return response.json();
	else:
		print('Error code for getting match data' + str(response.status_code))

# Grab the match stats for the given id
def matchStatistics(matchlist):
	for index in range(0,1):
		data = getMatchData(matchlist[index]['matchId'])
		print(data)

# This is where the application script starts

# User names for the people to be looked up
userNames = ['JuiMin', 'kryowing', 'yugichode', 'undinie']

for name in userNames:
	userID = getID(name.lower())
	print(name + ":" + str(userID))
	matches = getMatchList(userID)
	print(name + " games played: " + str(len(matches)))
	#matchStatistics(matches)
	print("")




