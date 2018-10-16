import React from 'react';
import Navbar from '../navbars/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFollows } from '../../actions/follow_actions';
import { fetchAlbums } from '../../actions/album_actions';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

import { filterFollows } from '../../util/selectors';

const mapStateToProps = state => {
  return {
  currUserId: state.session.id,
  follows: state.entities.follows
}};

const mapDispatchToProps = dispatch => {
  return {
  // fetchFollows: currUserId => dispatch(fetchFollows(currUserId)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  filterFollows: (follows, follow_type) => filterFollows(follows, follow_type)
}};

class Collection extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const page = 'collection';
    const followedPlaylistIds = this.props.filterFollows(Object.values(this.props.follows), 'playlist');

    return (
      <div className="collection">
        <Navbar page={page} />
        <Switch>
          <Route path="/collection/albums" component={AlbumsIndexContainer} />
          <Route path="/collection/artists" component={ArtistsIndexContainer} />
          <Route path="/collection/playlists" render={ () =>
              <PlaylistsIndexContainer
                currUserId={this.props.currUserId}
                followedPlaylistIds={followedPlaylistIds}/> } />


          <Route path="/collection/songs" component={SongsIndexContainer} />
          <Redirect to="/collection/albums" />
        </Switch>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
