import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import MainContentContainer from './main_content/main_content_container';
import Splash from './session/splash';
import Sidebar from './navbars/sidebar';
import MusicPlayer from './music_player/music_player';

const App = () => (
  <div>
    <header>
    </header>

    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/" component={MainContentContainer} />
    <ProtectedRoute path="/" component={Sidebar} />
    <ProtectedRoute path="/" component={MusicPlayer} />
  </div>
);

export default App;
