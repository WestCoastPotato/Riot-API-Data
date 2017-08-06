// This reducer should take in the state with the current user information and
// Alter it once the user queries the database or gets an API response from the
// Riot servers. This will alter the state with the new current user's information
// and output the following state

// State == array obj?
// Action == JSON notation
const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

// Export the reducer for use elsewhere
export default user;
