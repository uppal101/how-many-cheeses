export const setCheeseResult = () => {
 return {
  type: 'CHEESES_RESULT',
  payload: fetchCheese()
 }
}

function fetchCheese() {
 return fetch('https://cheeswhiz.herokuapp.com/api/cheese')
 .then(response => response.json())
 .then(result => result)
 .catch((err) => console.log('Houston we has a prolem!'))
}
