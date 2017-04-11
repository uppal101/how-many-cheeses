// import React,{Component} from "react"
// import {connect} from 'react-redux'
// import {getStoresNearMe, setMapResult} from '../action/googleMap'
// import {bindActionCreators} from 'redux'
// import {Button} from 'react-bootstrap';
//
// const mapStateToProps = (state, ownProps) => {
//  return {
//   value: state.query
//  }
// }
//
// // const mapDispatchToProps = (dispatch) => {
// //  return bindActionCreators({getStoresNearMe, setMapResult}, dispatch)
// // }
//
// const mapDispatchToProps = (dispatch) => {
//  return {
//   googleMapChange: (e) => {
//    console.log('event is ', e);
//    dispatch(setMapResult(e.target.value))
//   }
//  }
// }
//
// const MapButton = ({dist, zipCode}) => {
//  return (
//  <form>
//    <input
//     type="text"
//     placeholder="Max Distance Willing To Travel"
//     // value={value}
//     onChange={googleMapChange}
//     />
//     <Button onClick={googleMapChange}>Submit</Button>
//  </form>
// )
// }


// export default connect(mapStateToProps, mapDispatchToProps)(MapButton)
