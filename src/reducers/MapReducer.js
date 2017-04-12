const mapQuery = (state = [], action) => {
 // console.log(action);
 switch (action.type) {
  case  'FIND_STORE_FULFILLED':
  console.log('payload is ', action.payload);
   return action.payload
  default:
   return state
 }
}

export default mapQuery;
