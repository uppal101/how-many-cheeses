export const getStoresNearMe = (dist) => {
 return {
  type: 'RETURN_STORES',
  dist
 }
}

export const setMapResult = (dist) => {
 return {
  type: 'SET_MAP',
  payload: ++dist
 }
}
