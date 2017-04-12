export const cheeseQuery = (text) => {
 return {
  type: 'CHEESE_QUERY',
  text
 }
}

export const setCheeseResult = (cheeseName) => {
 return {
  type: 'CHEESE_RESULT',
  payload: fetchCheese(cheeseName)
 }
}

function fetchCheese(cheeseName) {
 return fetch(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
 .then(response => response.json())
 .then(result => result)
 .catch((err) => console.log('Houston we has a prolem!'))
}
