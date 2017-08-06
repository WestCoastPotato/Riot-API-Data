import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import the application and the service worker
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Start the redux state
import { createStore } from 'redux';
import state from './Reducers';
const domRoot = document.getElementById('root');
const store = createStore(state);

// Render the react Application through the App
ReactDOM.render(
  <App
    value={store.getState()}
  />,
  domRoot
);
registerServiceWorker();
