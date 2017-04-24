export const substituteQuery = ( text ) => {
    return {
        type: 'SUBSTITUTE_QUERY',
        text
    }
}

export const setCheeseResult = ( cheeseName ) => {
    return {
        type: 'SUBSTITUTE_RESULT',
        payload: fetchCheese( cheeseName )
    }
}

function fetchCheese( cheeseName ) {
    return fetch( `https://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}` )
        .then( response => response.json() )
        .then( result => result )
        .catch( ( err ) => console.log( 'Houston we has a prolem!' ) )
}
