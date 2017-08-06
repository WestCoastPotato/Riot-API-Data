// This contains the index of the state container built in redux
// I am not yet sure how this works so the evolution of this will be apparent through the commits
import { combineReducers } from 'redux';
// Add the rest of the reducers here as they come in (I hope this structure is good)
import user from './user.js';

// This is a comma separated combination of reducers. This will collect all the imported reducers
// and output them into one application so that we have an easier time
// Importing all the reducers to the application would take a while
const todoApp = combineReducers({
  user
});

// Export the application
export default todoApp;
