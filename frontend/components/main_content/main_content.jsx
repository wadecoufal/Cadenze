import React from 'react';
import Sidebar from '../navbars/sidebar';
import MusicPlayer from '../music_player/music_player';

import Navbar from '../navbars/navbar';
import Browse from './browse';
import Search from './search';
import Collection from './collection';

import AlbumShow from '../albums/album_show';

import { Route, Switch, Redirect } from 'react-router-dom';

class MainContent extends React.Component {
  render () {
    return (
      <div id="main-content">
        <div id="main-content-2">
          <Sidebar />

          <div className="feature-content" >
            <Switch>
              <Route path="/browse" component={Browse} />
              <Route path="/search" component={Search} />
              <Route path="/collection" component={Collection} />
              <Route path="/album/:albumId" component={AlbumShow} />
              <Redirect to="/browse/albums" />
            </Switch>
          </div>

        </div>

        <MusicPlayer />
      </div>
    )
  }
}

export default MainContent;
