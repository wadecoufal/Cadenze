import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import SplashPage from './splash_page';
import { AuthRoute } from '../../util/route_util';
import { Switch, Redirect } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <AuthRoute exact path="/" component={SplashPage} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }

}

export default Splash;
