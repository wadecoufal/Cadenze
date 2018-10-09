import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import SplashPage from './splash_page';
import { AuthRoute } from '../../util/route_util';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
      </div>
    )
  }

}

export default Splash;
