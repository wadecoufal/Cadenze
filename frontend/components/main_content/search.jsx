import React from 'react';
import Navbar from '../navbars/navbar';

import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

class Search extends React.Component {

  render() {
    const page = 'search';

    return (
      <div className="search">
        <Navbar page={page} />
          <Switch>
            <Route path="/search/albums" component={AlbumsIndexContainer} />
            <Route path="/search/artists" component={ArtistsIndexContainer} />
            <Route path="/search/playlists" component={PlaylistsIndexContainer} />
            <Route path="/search/songs" component={SongsIndexContainer} />
            <Redirect to="/search/albums" />
          </Switch>
      </div>
    )
  }

}

export default Search;
