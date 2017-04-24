import initialState from './InitialState'


const CheeseReducer = ( state = initialState.cheese, action ) => {
    // console.log(state)
    console.log( action );
    switch ( action.type ) {
    case 'CHEESE_QUERY':
        return { ...state,
            query: action.text
        }
    case 'CHEESE_RESULT_FULFILLED':
        return {
            query: "",
            results: action.payload
        }
    default:
        return state
    }
}

export default CheeseReducer;
