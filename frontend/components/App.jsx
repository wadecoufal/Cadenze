import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainContent from './main_content/main_content';
import Splash from './session/splash';

const App = () => (
  <div>
    <header>
    </header>
    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/" component={MainContent} />
  </div>
);

export default App;
