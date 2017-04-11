export const setQuery = (text) => {
 return {
  type: 'SET_QUERY',
  text
 }
}

export const setCheeseResult = (cheeseName) => {
 return {
  type: 'SET_RESULT',
  payload: fetchCheese(cheeseName)
 }
}

function fetchCheese(cheeseName) {
 const zip = 94103;
 // fetch(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${cheeseName}`)
 fetch(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${cheeseName}`)
 .then(response => console.log(response))
 .then(result => console.log(result))
 .catch((err) => console.log('Houston we has a problem!'))
}
