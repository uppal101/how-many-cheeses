import React, {Component} from 'react';
import SignIn from './SignIn';
import LoginTitle from './LoginTitle';

class SignInPage extends Component {
    render() {
        return (
          <div>
            <LoginTitle/>
            <SignIn/>
          </div>  
        )
    }
}

export default SignInPage
