// absolute imports (from packages) go before relative imports.
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
// relative imports (your code)
import { setMapQuery, mapResult } from "../action/googleMap";


const mapStateToProps = (state, ownProps) => ({
  value: state.query
});

// binds more tha
const mapDispatchToProps = dispatch => bindActionCreators({ setMapQuery, mapResult }, dispatch);


class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text"
          placeholder="Search"
          onChange={event => this.props.setMapQuery(event.target.value)}
          />
        <Button onClick={(event) => {
          event.preventDefault();
          this.props.mapResult(this.props.value);
        }}>Search</Button>
      </form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
