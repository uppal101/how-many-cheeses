import React from "react"
import {connect} from 'react-redux'
import {CheeseQuery, setCheeseResult} from '../action/cheeseName'
import {bindActionCreators} from 'redux'
import {Button} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
 return {
  value: state.query
 }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators({CheeseQuery, setCheeseResult}, dispatch)
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
         type="text"
         placeholder="Search By Cheese"
         onChange={(event) => this.props.CheeseQuery(event.target.value)}
         />
         <Button onClick={(event) => {
          // console.log('Inside of submit function');
          event.preventDefault();
          this.props.setCheeseResult(this.props.value)
         }}>Sumbit Cheese</Button>
      </form>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
