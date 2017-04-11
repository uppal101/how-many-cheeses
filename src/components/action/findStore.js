const getPayload = (zip, dist) => {
 return fetch(`http://cheeswhiz.herokuapp.com/api/findcheese/${zip}/${dist}`)
  .then(response => response.json())
  .catch((err)  => console.log('We have an error', err));
};

 const findStore = (zip, dist) => {
  console.log('>>>>>>');
 return {
  type: 'FIND_STORE',
  payload: getPayload(zip, dist)
 }
}

export default findStore;
