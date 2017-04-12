import React, {Component} from 'react';
import {FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';

class Email extends Component {
    render() {
        return (
          <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                  Email
              </Col>
              <Col sm={10}>
                  <FormControl type="email" placeholder="Email"/>
              </Col>
          </FormGroup>
        )
    }
}

export default Email
