import React from "react"
import {connect} from 'react-redux'
import {setQuery} from '../action'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state, ownProps) => {
 return {
  value: state.query
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({setQuery}, dispatch)
}


class SearchBar extends React.Component {
  render() {
   console.log(this.props.value);
    return (
      <form>
        <input
         type="text"
         placeholder="Search"
         onChange={(event) => this.props.setQuery(event.target.value)}
         />
      </form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
