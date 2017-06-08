'''
Riot API  Interface

'''
import time
import json
from pprint import pprint

# This is where the application script starts

# User names for the people to be looked up
userNames = ['JuiMin', 'kryowing', 'yugichode', 'undinie']

# Username
user = 'JuiMin'

# Saved IDs -- JuiMin
GAME_ID = "25392256"

# Start the Analysis
def analysis():
    with open('matchData_JuiMin.json') as data_file:
        data = json.load(data_file)

    pprint(data[0])

analysis()
