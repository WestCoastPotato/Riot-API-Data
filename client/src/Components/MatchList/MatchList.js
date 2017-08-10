import React, { Component } from 'react';
import './MatchList.css';

class Match extends Component {
  // Construct the twentyMatches
  constructor(props) {
    super(props);
    if (this.state == null) {
      fetch(this.state.host + "/scripts/twenty/" + this.state.searchText)
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
