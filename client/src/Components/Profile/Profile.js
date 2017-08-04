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
    this.renderRankedStats = this.renderRankedStats.bind(this);
  }

  renderRankedStats(json) {
    if (json != null) {
      return (
        <div className="Ranked">
          <h4>{json.queueType} - {json.tier} {json.rank}</h4>
          {json.leagueName}
          <ul>
            <li>LP - {json.leaguePoints}</li>
            <li>Wins - {json.wins}</li>
            <li>Losses - {json.losses}</li>
          </ul>
        </div>
      );
    }
  }

  componentWillMount() {
    // Check database for the data that we need
    // REQUIRES 2 API CALLS
    fetch(window.location.origin + "/scripts/summoner/" + this.state.searchText)
      .then(function(response) {
        return response.json();
      })
      .then(function(text) {
        // FETCH THE RANKED DATA
        // If we reached here then we should have the json and can add it to the state
        this.setState({userInfo: text, username: text.name, userId: text.id});
        return fetch(window.location.origin + "/scripts/ranked/" + this.state.userId)
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
      return (
        <div className="Profile">
          <h2>{this.state.userInfo.name}</h2>
          <h3>Level {this.state.userInfo.summonerLevel}</h3>
          <div className="Stats">
            {this.renderRankedStats(this.state.rankedSolo)}
            {this.renderRankedStats(this.state.rankedFlex)}
          </div>
        </div>
      );
    }
    return (
      <div className="Profile">
        Error rendering profile. May be a server problem.
      </div>
    );
  }
}

export default Profile;
