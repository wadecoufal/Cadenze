import React from 'react';
import Sidebar from '../navbars/sidebar';
import MusicPlayer from '../music_player/music_player';

import Navbar from '../navbars/navbar';
import Browse from './browse';
import Search from './search';
import Collection from './collection';

import { Route, Switch, Redirect } from 'react-router-dom';

class MainContent extends React.Component {
  render () {
    return (
      <div className="main-content">

        <Switch>
          <Route path="/browse" component={Browse} />
          <Route path="/search" component={Search} />
          <Route path="/collection" component={Collection} />
          <Redirect to="/browse/albums" />
        </Switch>
        <button className="logout" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default MainContent;
