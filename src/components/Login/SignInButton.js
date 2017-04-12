import React, {Component} from 'react';
import {FormGroup, Col, Button} from 'react-bootstrap';

class SignInButton extends Component {
    render() {
        return (
          <FormGroup>
              <Col smOffset={2} sm={10}>
                  <Button type="submit">
                      Sign in
                  </Button>
              </Col>
          </FormGroup>
        )
    }
}

export default SignInButton
