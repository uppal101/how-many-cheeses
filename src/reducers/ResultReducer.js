import initialState from './InitialState'


const ResultReducer = (state = initialState.firmness, action) => {
  // console.log(state)
  console.log(action);
 switch (action.type) {
  case 'FIRMNESS_RESULT_FULFILLED':
    return {results: action.payload}
  default:
   return state
 }
}

export default ResultReducer;
