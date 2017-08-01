import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import routes
import Home from '../Home/Home.js';
import User from '../User/User.js';

// React Router Dom import components
// using ES6 modules
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>API Project v0.0.2</h2>
          </div>

          <div id="menu">
            <Link to="/">Home</Link>
            <Link to="/">User</Link>
          </div>

          <p className="App-intro">
            This Project will aim to gather data about a specific user from the Riot API and provide meaningful
            analytics surrounding their performance.
          </p>

          <Route exact path="/" component={Home}/>
          <Route path="/user/:userID" component={User}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
