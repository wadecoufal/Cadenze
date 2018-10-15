import React from 'react';
import Sidebar from '../navbars/sidebar';
import ReactMusicPlayer from '../music_player/music_player';

import Navbar from '../navbars/navbar';
import Browse from './browse';
import Search from './search';
import Collection from './collection';
import Modal from '../modal';

import AlbumShow from '../albums/album_show';
import PlaylistShow from '../playlists/playlist_show';
import ArtistShow from '../artists/artist_show';

import { Route, Switch, Redirect } from 'react-router-dom';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="main-content">
        <div id="main-content-2">
          <Modal />
          <Sidebar />

          <div className="feature-content" >
            <Switch>
              <Route path="/browse" component={Browse} />
              <Route path="/search" component={Search} />
              <Route path="/collection" component={Collection} />
              <Route path="/album/:albumId" component={AlbumShow} />
              <Route path="/playlist/:playlistId" component={PlaylistShow} />
              <Route path="/artist/:artistId" component={ArtistShow} />
              <Redirect to="/browse/albums" />
            </Switch>
          </div>

        </div>

        <ReactMusicPlayer />
      </div>
    )
  }
}

export default connect(null, mdp)(MainContent);
