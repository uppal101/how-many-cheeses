import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import Password from './Password';
import Email from './Email';
import RememberMe from './RememberMe';
import SignInButton from './SignInButton';
class SignIn extends Component {
    render() {
        return (
            <Form horizontal>
                <Email/>
                <Password/>
                <RememberMe/>
                <SignInButton/>
            </Form>
        )
    }
}

export default SignIn
