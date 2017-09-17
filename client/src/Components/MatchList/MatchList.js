import React, { Component } from 'react';
import './MatchList.css';

class Match extends Component {
  // Construct the twentyMatches
  constructor(props) {
    super(props);
    // This should set the initial state for the component
    // If there is no initial state already then make one
    if (this.state != null) {
      fetch(this.state.host + "/scripts/twenty/" + this.state.searchText);
    } else {
      console.log(props)
    }
  }

  render() {
    return (
      <div className="MatchList">
        <p>
          Error dislaying the match list. May be a server issue
        </p>
      </div>
    );
  }
}

export default Match;
