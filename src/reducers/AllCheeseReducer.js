import initialState from './InitialState'


const AllCheesesReducer = ( state = initialState.cheeses, action ) => {
    // console.log(state)
    switch ( action.type ) {
        // console.log(action);
    case 'CHEESES_RESULT_FULFILLED':
        return {
            results: action.payload
        }
    default:
        return state
    }
}

export default AllCheesesReducer;
