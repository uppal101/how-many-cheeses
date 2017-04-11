const mapQuery = (state = [], action) => {
 console.log(action.type);
 switch (action.type) {
  case  'FIND_STORE_FULFILLED':
   return action.payload
  default:
   return state
 }
}

export default mapQuery;
