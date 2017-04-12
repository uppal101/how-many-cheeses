import initialState from './InitialState'


const FirmnessReducer = (state = initialState.cheese, action) => {
  // console.log(state)
  console.log(action);
 switch (action.type) {
  case  'FIRMNESS_QUERY':
   return {...state, query: action.text}
  case 'FIRMNESS_RESULT_FULFILLED':
    return {query: "", results: action.payload}
  default:
   return state
 }
}

export default FirmnessReducer;
