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
 fetch(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${cheeseName}`)
 .then(response => response.json())
 .then(result => console.log(result))
 .catch((err) => console.log('Houston we has a prolem!'))
}
