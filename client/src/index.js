import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Render the react Application through the App
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
