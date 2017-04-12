export const firmnessQuery = (text) => {
 return {
  type: 'FIRMNESS_QUERY',
  text
 }
}

export const setCheeseResult = (cheeseName) => {
 return {
  type: 'FIRMNESS_RESULT',
  payload: fetchCheese(cheeseName)
 }
}

function fetchCheese(cheeseName) {
 return fetch(`https://cheeswhiz.herokuapp.com/api/cheese/firmness/${cheeseName}`)
 .then(response => response.json())
 .then(result => result)
 .catch((err) => console.log('Houston we has a prolem!'))
}
