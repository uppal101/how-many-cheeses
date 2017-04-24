export const animalQuery = ( text ) => {
    return {
        type: 'ANIMAL_QUERY',
        text
    }
}

export const setCheeseResult = ( cheeseName ) => {
    return {
        type: 'ANIMAL_RESULT',
        payload: fetchCheese( cheeseName )
    }
}

function fetchCheese( cheeseName ) {
    return fetch( `https://cheeswhiz.herokuapp.com/api/cheese/animal/${cheeseName}` )
        .then( response => response.json() )
        .then( result => result )
        .catch( ( err ) => console.log( 'Houston we has a prolem!' ) )
}
