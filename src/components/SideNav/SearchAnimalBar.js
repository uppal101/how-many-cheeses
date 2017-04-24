import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

import { animalQuery, setCheeseResult } from "../action/animal";


const mapStateToProps = (state, ownProps) => ({
  value: state.animal.query
});

const mapDispatchToProps = dispatch => bindActionCreators({ animalQuery, setCheeseResult }, dispatch);

class SearchBar extends React.Component {
  render() {
    console.log(`This is props ${this.props.value}`);
    return (
      <form>
        <input type="text"
          placeholder="Search By Cheese"
          value={this.props.value}
          onChange={event => this.props.animalQuery(event.target.value)}
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
