import React from 'react';
import Sidebar from '../navbars/sidebar';
import MusicPlayer from '../music_player/music_player';

import Browse from './browse';
import Search from './search';
import Collection from './collection';

import { Route } from 'react-router-dom';

class MainContent extends React.Component {
  render () {
    return (
      <div className="main-content">

        <Route to="/browse" component={Browse} />
        <Route to="/search" component={Search} />
        <Route to="/collection" component={Collection} />


        <button className="logout" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default MainContent;
