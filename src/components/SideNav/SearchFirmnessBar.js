import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

import { firmnessQuery, setCheeseResult } from "../action/firmness";


const mapStateToProps = (state, ownProps) => ({
  value: state.firmness.query
});

const mapDispatchToProps = dispatch => bindActionCreators({ firmnessQuery, setCheeseResult }, dispatch);

class SearchBar extends React.Component {
  render() {
    console.log(`This is props ${this.props.value}`);
    return (
      <form>
        <input type="text"
          placeholder="Search By Cheese"
          value={this.props.value}
          onChange={event => this.props.firmnessQuery(event.target.value)}
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
