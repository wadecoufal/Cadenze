import React from 'react';
import Navbar from '../navbars/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

class Collection extends React.Component {

  render() {
    const page = 'collection';

    return (
      <div className="collection">
        <Navbar page={page} />
        <Switch>
          <Route path="/collection/albums" component={AlbumsIndexContainer} />
          <Route path="/collection/artists" component={ArtistsIndexContainer} />
          <Route path="/collection/playlists" component={PlaylistsIndexContainer} />
          <Route path="/collection/songs" component={SongsIndexContainer} />
          <Redirect to="/collection/albums" />
        </Switch>
      </div>
    )
  }

}

export default Collection;
