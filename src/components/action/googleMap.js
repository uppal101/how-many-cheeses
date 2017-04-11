export const setMapQuery = (dist) => {
 return {
  type: 'SET_QUERY',
  dist
 }
}

// export const setMapResult = (dist) => {
//  return {
//   type: 'SET_MAP',
//   payload: dist
//  }
// }


export const mapResult = (dist) => {
 return {
  type: 'SET_RESULT',
  payload: fetchCheese(dist)
 }
}

function fetchCheese(dist) {
 // const dist = 10;
 const zip = 93103;
 fetch(`http://cheeswhiz.herokuapp.com/api/cheese/findcheese/${zip}/${dist}`)
 // fetch(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${cheeseName}`)
 .then(response => console.log('response is ', response))
 // .then(result => console.log(result))
 .catch((err) => console.log('Houston we has a problem!'))
}
