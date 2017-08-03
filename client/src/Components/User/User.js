// IMport react components and react
import React, { Component } from 'react';
import './User.css';

// Import the react router
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';

// Import routes of match list and match information
import MatchList from '../MatchList/MatchList';
import Profile from '../Profile/Profile';
import CurrentGame from '../CurrentGame/CurrentGame';

// React component that should diplay user stats for the currently searched user
class User extends Component {
  // This component should get match information from the database and render information about the specific user
  constructor(props) {
    // Super
    super(props);
    // Set the state if nothing has been set yet
    if (this.state == null) {
      this.state = {
        redirect: false,
        profileRoute: "/user/" + this.props.match.params.userID + "/profile",
        matchListRoute: "/user/" + this.props.match.params.userID + "/matchlist",
        currentGameRoute: "/user/" + this.props.match.params.userID + "/currentGame",
      };
    }
    // bind the function for redirecting
    this.toSearch = this.toSearch.bind(this);
  }

  // Set the redirect to the search bar
  toSearch() {
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <BrowserRouter>
        <div className="userDisplay">
          <h2>{this.props.match.params.userID}</h2>
          <button id="toSearch" onClick={this.toSearch}>Search Different User</button>
          <div className="Menu">
            <Link className="menuItem" to={this.state.profileRoute}>Profile</Link>
            <Link className="menuItem" to={this.state.matchListRoute}>Match List</Link>
            <Link className="menuItem" to={this.state.currentGameRoute}>Current Game</Link>
          </div>
          <div className="userData">
            <Route path={this.state.profileRoute} component={Profile}></Route>
            <Route path={this.state.matchListRoute} component={MatchList}></Route>
            <Route path={this.state.currentGameRoute} component={CurrentGame}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default User;
