const result = (state = [], action) => {
 switch (action.type) {
  case 'SET_QUERY':
  return action.payload

  default:
   return state
 }
}

export default result;
