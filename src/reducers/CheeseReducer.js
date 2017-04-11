import initialState from './InitialState'

const CheeseReducer = (state = initialState.cheese, action) => {
  // console.log(state)
 switch (action.type) {
  case  'CHEESE_QUERY':
   return {...state, state.query: action.text}
  default:
   return state
 }
}

export default query;
