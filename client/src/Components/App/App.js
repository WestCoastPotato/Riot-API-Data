import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RIOT API Project v0.0.1</h2>
        </div>
        <p className="App-intro">
          This Project will aim to gather data about a specific user from the Riot API and provide meaningful
          analytics surrounding their performance.
        </p>
      </div>
    );
  }
}

export default App;
