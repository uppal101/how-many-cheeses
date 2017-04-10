export const setQuery = (text) => {
 return {
  type: 'SET_QUERY',
  text
 }
}

export const setCheeseResult = (cheeseName) => {
 return {
  type: 'SET_NAV_RESULT',
  payload: fetchCheeseByName(cheeseName)
 }
}

function fetchCheeseByName(cheeseName) {
 fetch()
}
