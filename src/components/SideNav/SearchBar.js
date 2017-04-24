import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

import { setQuery, setCheeseResult } from "../action";


const mapStateToProps = (state, ownProps) => ({
  value: state.query
});

const mapDispatchToProps = dispatch => bindActionCreators({ setQuery, setCheeseResult }, dispatch);

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text"
          placeholder="Search"
          onChange={event => this.props.setQuery(event.target.value)}
          />
        <Button onClick={(event) => {
          // console.log('Inside of submit function');
          event.preventDefault();
          this.props.setCheeseResult(this.props.value);
        }}>Sumbit Cheese</Button>
      </form>

    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
