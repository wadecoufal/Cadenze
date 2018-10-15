import React from 'react';
import Navbar from '../navbars/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

const mapStateToProps = state => ({
  currUserId: state.session.id
});

class Collection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const page = 'collection';

    return (
      <div className="collection">
        <Navbar page={page} />
        <Switch>
          <Route path="/collection/albums" component={AlbumsIndexContainer} />
          <Route path="/collection/artists" component={ArtistsIndexContainer} />
          <Route path="/collection/playlists" render={ () => <PlaylistsIndexContainer currUserId={this.props.currUserId}/> } />


          <Route path="/collection/songs" component={SongsIndexContainer} />
          <Redirect to="/collection/albums" />
        </Switch>
      </div>
    )
  }

}

export default connect(mapStateToProps)(Collection);
