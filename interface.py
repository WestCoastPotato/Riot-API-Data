'''
Riot API  Interface

'''
import riotAPI
import time
import json
from pprint import pprint

# This is where the application script starts

# User names for the people to be looked up
userNames = ['JuiMin', 'kryowing', 'yugichode', 'undinie']

# Saved IDs -- JuiMin
GAME_ID = "25392256"

# riotAPI.dumpMatchList(GAME_ID, 'matchlist_' + GAME_ID  + '.json')

print("matchlist.json contains match list for ", GAME_ID)

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

def analysis():
    with open('matchdata_JuiMin.json') as data_file:
        data = json.load(data_file)

    pprint(data[0]['participants'])
analysis()
