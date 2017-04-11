import React from "react"
import {connect} from 'react-redux'
import {setMapQuery, mapResult} from '../action/googleMap'
import {bindActionCreators} from 'redux'
import {Button} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
 return {
  value: state.query
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({setMapQuery, mapResult}, dispatch)//binds more tha
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
         type="text"
         placeholder="Search"
         onChange={(event) => this.props.setMapQuery(event.target.value)}
         />
         <Button onClick={(event) => {
          event.preventDefault();
          this.props.mapResult(this.props.value)
         }}>Search</Button>
      </form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
