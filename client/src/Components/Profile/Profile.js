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
          searchText: this.props.match.path.split("/")[2]
        }
      } else {
        this.state = {
          searchText: 'userID'
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
        this.setState({userInfo: text});

        // We are going to need to use another fetch to get the rank information
        return text;
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    if (this.state.userInfo != null) {
      return (
        <div className="Profile">
          This component should display the Profile of the selected user
          <ul>
            <li>Account ID: {this.state.userInfo.accountId}</li>
            <li>ID: {this.state.userInfo.id}</li>
            <li>Name: {this.state.userInfo.name}</li>
            <li>Icon: {this.state.userInfo.profileIconId}</li>
            <li>Summoner Level: {this.state.userInfo.summonerLevel}</li>
            <li>Revision Date: {this.state.userInfo.revisionDate}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="Profile">
          This component should display the Profile of the selected user
        </div>
      );
    }
  }
}

export default Profile;
