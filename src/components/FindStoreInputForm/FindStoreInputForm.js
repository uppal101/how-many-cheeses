import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import findStore from "../action/findStore";


const mapDispatchToProps = dispatch => bindActionCreators({ findStore }, dispatch);

const FindStoreInputForm = props => (
  <form onSubmit={(event) => {
    event.preventDefault();
    const form = event.target;
    const zip = form.zip.value;
    const dist = form.dist.value;
   // console.log({ zip, dist });
    props.findStore(zip, dist);
  }}>
    <input type="text"
      name="zip"
      placeholder="ZipCode"
      />
    <input type="text"
      name="dist"
      placeholder="Distance"
      />
    <Button type="submit">Search</Button>
  </form>
 );


export default connect(null, mapDispatchToProps)(FindStoreInputForm);
