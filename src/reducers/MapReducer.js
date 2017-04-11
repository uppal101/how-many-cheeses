const mapQuery = (state = [], action) => {
 switch (action.type) {
  case  'MAP_QUERY':
   return action.text
  default:
   return state
 }
}

export default mapQuery;
