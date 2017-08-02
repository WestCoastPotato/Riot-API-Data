// IMport react components and react
import React, { Component } from 'react';
import './User.css';

// Import the react router
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Import routes of match list and match information
import MatchList from '../MatchList/MatchList';
import Match from '../Match/Match';
import Profile from '../Profile/Profile';
import CurrentGame from '../CurrentGame/CurrentGame';

// React component that should diplay user stats for the currently searched user
class User extends Component {
  // Get the props for this component and add them to the state
  constructor(props) {
    super(props);
    if (props.match != null) {
      this.state = {
        userID: props.match.params.userID
      };
    } else {
      this.state = {}
    }
  }

  componentWillMount() {
    // When recognizing that the component will mount, the component
    // will run the script javascript to see if there is a user with this credential
    // If the user is the current cookie -- do nothing

    // If the user is not the current cookie and is in the database get info from database

    // If the user is not in the cookie or in the database, perform the api call and store their
    // User information
  }

  // Render the component
  // This component should get match information from the database and render information about the specific user
  render() {
    return (
      <BrowserRouter>
        <div className="userDisplay">
          <div className="Menu">
            <h2>{this.state.userID}</h2>
            <Link className="menuItem" to="/user/:userID/profile">Profile</Link>
            <Link className="menuItem" to="/user/:userID/matchlist">Match List</Link>
            <Link className="menuItem" to="/user/:userID/currentGame">Current Game</Link>
          </div>
          <div className="userData">
            <Route path="/user/:userID/profile" component={Profile}></Route>
            <Route path="/user/:userID/matchlist" component={MatchList}></Route>
            <Route path="/match/:matchID" component={Match}></Route>
            <Route path="/user/:userID/currentGame" component={CurrentGame}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default User;
