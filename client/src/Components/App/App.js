import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import routes
import Home from '../Home/Home';
import User from '../User/User';

// React Router Dom import components
// using ES6 modules
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>API Project v0.0.2</h2>
          </div>

          <p className="App-intro">
            This Project will aim to gather data about a specific user from the Riot API and provide meaningful
            analytics surrounding their performance.
          </p>

          <div className="routeContainer">
            <Route path="/" component={Home}/>
            <Route path="/user/:userID" component={User}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
