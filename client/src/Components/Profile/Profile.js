// Import react components
import React, { Component } from 'react';
import './Profile.css';

// Import fetch
import 'whatwg-fetch';

class Profile extends Component {
  constructor(props) {
    super(props);

    // If the current state is null set the current state
    if (this.state == null) {
      if (this.props.match != null) {
        this.state = {
          searchText: this.props.match.path.split("/")[2],
          ranked: null
        }
      } else {
        this.state = {
          searchText: 'userID',
          ranked: null
        }
      }
    }
  }

  componentWillMount() {
    // Check database for the data that we need
    // REQUIRES 1 API CALL
    fetch("http://localhost:3001/scripts/summoner/" + this.state.searchText)
      .then(function(response) {
        return response.json();
      })
      .then(function(text) {
        // If we reached here then we should have the json and can add it to the state
        this.setState({userInfo: text, username: text.name, userId: text.id});
        return fetch("http://localhost:3001/scripts/ranked/" + this.state.userId)
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            console.log(error);
            return error;
          })
      }.bind(this))
      .then(function(json) {
        // Parse the json into the state
        this.setState({rankedSolo: json[0], rankedFlex: json[1]});
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    if (this.state.userInfo != null) {
      if (this.state.rankedSolo != null) {
        console.log(this.state.rankedSolo);
        return (
          <div className="Profile">
            <h2>{this.state.userInfo.name}</h2>
            <h3>Level {this.state.userInfo.summonerLevel}</h3>
            <div className="Stats">
              <div className="Ranked">
                <h4>Solo/Duo - {this.state.rankedSolo.tier} {this.state.rankedSolo.rank}</h4>
                {this.state.rankedSolo.leagueName}
                <ul>
                  <li>LP - {this.state.rankedSolo.leaguePoints}</li>
                  <li>Wins - {this.state.rankedSolo.wins}</li>
                  <li>Losses - {this.state.rankedSolo.losses}</li>
                </ul>
              </div>
              <div className="Ranked">
                <h4>Flex - {this.state.rankedFlex.tier} {this.state.rankedFlex.rank}</h4>
                {this.state.rankedFlex.leagueName}
                <ul>
                  <li>LP - {this.state.rankedFlex.leaguePoints}</li>
                  <li>Wins - {this.state.rankedFlex.wins}</li>
                  <li>Losses - {this.state.rankedFlex.losses}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="Profile">
        This component should display the Profile of the selected user
      </div>
    );
  }
}

export default Profile;
