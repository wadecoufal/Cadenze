import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../navbars/navbar';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

class Browse extends React.Component {

  componentDidMount() {
    
  }

  render() {
    const page = 'browse';

    return (
      <div className="browse">
        <Navbar page={page} />
        <Switch>
          <Route path="/browse/albums" component={AlbumsIndexContainer} />
          <Route path="/browse/artists" component={ArtistsIndexContainer} />
          <Route path="/browse/playlists" component={PlaylistsIndexContainer} />
          <Route path="/browse/songs" component={SongsIndexContainer} />
          <Redirect to="/browse/albums" />
        </Switch>
      </div>
    )
  }

}

export default Browse;
