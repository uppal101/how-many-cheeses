import initialState from './InitialState'

const SubstituteReducer = (state = initialState.substitute, action) => {
  // console.log(state)
  console.log(action);
 switch (action.type) {
  case  'SUBSTITUTE_QUERY':
   return {...state, query: action.text}
  case 'SUBSTITUTE_RESULT_FULFILLED':
    return {query: "", results: action.payload}
  default:
   return state
 }
}

export default SubstituteReducer;
