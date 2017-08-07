# RIOT API Project

[![Build Status](https://travis-ci.org/JuiMin/Riot-API-Data.svg?branch=master)](https://travis-ci.org/JuiMin/Riot-API-Data)
[![codecov](https://codecov.io/gh/JuiMin/Riot-API-Data/branch/master/graph/badge.svg)](https://codecov.io/gh/JuiMin/Riot-API-Data)


## Description
This project aims to find some use for the Riot API that we can't find elsewhere on the web

The current desire is for the user to be able to input their screen name (summoner id?) and be able to see their
entire history of ranked games. Hopefully there will be some way to get normal game data as well but for now we know
how to do ranked games. The server will then either cache these games and allow the user to peruse based on various sorting
method.

Data is taken from [Riot API](https://developer.riotgames.com/) V.3

## Current Topics to Explore
- Looking at improvement over the course of all Ranked Games
- Look at information from every Ranked Game Played
- Add data visualization
- Add an API endpoint in case someone is looking for something cool on this
- View normal game statistics
- Work on homepage UI
- What day of the week does a person win the most? What time of day?

## How to Run
Since this isn't hosted on anything at the moment, we can run it by running npm start on both
the client and the server. Doing so will allow the user to run the application locally. (This
will become more complex if we use local data storage). As of right now, since everything is not online
the data is purely gathered through API calls. This is very inefficient and will change on deployment

## Requires
- Node.js v6.11
- npm v5.3

## Technology
#### JavaScript
- [React JS](https://facebook.github.io/react/)
- [Express](https://expressjs.com/)
- [Redux](http://redux.js.org/)

#### Templating
- [PUG/Jade](https://pugjs.org/api/getting-started.html)
- [Stylus](http://stylus-lang.com/)


## Constraints (?)
Theoretically there won't be a lot of people using this so we shouldn't worry too much about space and computing costs
