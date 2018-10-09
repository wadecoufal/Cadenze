import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainContent from './main_content/main_content';
import SplashPage from './session/splash_page';

const App = () => (
  <div>
    <header>
    </header>
    <AuthRoute path="/" component={SplashPage} />
    <ProtectedRoute path="/" component={MainContent} />
  </div>
);

export default App;
