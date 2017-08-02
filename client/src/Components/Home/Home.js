import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
          <form id="searchSummonerForm">
            Search User: <input type="text" id="summonerSearchBar" /> <input type="submit" />
          </form>
      </div>
    );
  }
}

export default Home;
