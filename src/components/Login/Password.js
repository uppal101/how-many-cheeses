import React, { Component } from "react";
import { FormGroup, Col, ControlLabel, FormControl } from "react-bootstrap";

class Password extends Component {
  render() {
    return (
      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>Password</Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password"/>
        </Col>
      </FormGroup>
    );
  }
}

export default Password;
