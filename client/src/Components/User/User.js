sudo // IMport react components and react
import React, { Component } from 'react';
import './User.css';


// React component that should diplay user stats for the currently searched user
class User extends Component {
  // Get the props for this component and add them to the state
  constructor(props) {
    super(props);
    this.state = {
      userID: props.match.params.userID
    };
  }

  componentWillMount() {
    console.log(this.state);
    // When recognizing that the component will mount, the component
    // will run the script javascript to see if there is a user with this credential
    // If the user is the current cookie -- do nothing

    // If the user is not the current cookie and is in the database get info from database

    // If the user is not in the cookie or in the database, perform the api call and store their
    // User information
  }

  // Render the component
  render() {
    return (
      <div className="Match">
        <h2>{this.state.userID}</h2>
        <p className="Match-intro">
          This component should display the match information for the selected user
        </p>
      </div>
    );
  }

}

export default User;
