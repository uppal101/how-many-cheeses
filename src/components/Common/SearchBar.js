import React from "react"
import {connect} from 'react-redux'
import {setQuery, setCheeseResult} from '../action'
import {bindActionCreators} from 'redux'
import {Button} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
 return {
  value: state.query
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({setQuery, setCheeseResult}, dispatch)
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
         <Button onClick={(event) => {
          // console.log('Inside of submit function');
          event.preventDefault();
          this.props.setCheeseResult(this.props.value)
         }}>Sumbit</Button>
      </form>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
