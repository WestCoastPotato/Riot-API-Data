import requests
import json
import time
from pprint import pprint

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

# Api call getting all the matches for the given ID
def dumpMatchList(gameID, outputfile):
	matches = getMatchList(gameID)
	matchFile = open(outputfile, 'w')
	# Truncate the file to delete current content
	matchFile.truncate()
	# Append the json contents to the file
	json.dump(matches, matchFile)

# pprint(data)
def eatALlMatches():
    with open('matchlist_' + GAME_ID  + '.json') as data_file:
        data = json.load(data_file)
    count = 0
    total = 0
    allMatches = []
    for obj in data:
        # Call Api
        print("Counting :", total, " Cycle: ", count, " Match ID: ", obj['matchId'])
        allMatches.append(riotAPI.getMatchData(obj['matchId']))
        count += 1
        total += 1
        if count == 9:
            print("sleeping")
            time.sleep(10)
            count = 0

    matchFile = open("matchdata_JuiMin.json", 'w')
    # Truncate the file to delete current content
    matchFile.truncate()
    # Append the json contents to the file
    json.dump(allMatches, matchFile)
