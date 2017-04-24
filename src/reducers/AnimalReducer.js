import initialState from './InitialState'


const AnimalReducer = ( state = initialState.animal, action ) => {
    // console.log(state)
    console.log( action );
    switch ( action.type ) {
    case 'ANIMAL_QUERY':
        return { ...state,
            query: action.text
        }
    case 'ANIMAL_RESULT_FULFILLED':
        return {
            query: "",
            results: action.payload
        }
    default:
        return state
    }
}

export default AnimalReducer;
