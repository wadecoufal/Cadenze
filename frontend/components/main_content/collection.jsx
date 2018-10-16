import React from 'react';
import Navbar from '../navbars/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';

import AlbumsIndexContainer from '../albums/albums_index_container';
import ArtistsIndexContainer from '../artists/artists_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import SongsIndexContainer from '../songs/songs_index_container';

import { filterFollows } from '../../util/selectors';
import { fetchFollows } from '../../actions/follow_actions';

const mapStateToProps = state => {
  return {
  currUserId: state.session.id,
  follows: state.entities.follows
}};

const mapDispatchToProps = dispatch => {
  return {
  fetchFollows: currUserId => dispatch(fetchFollows(currUserId)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  filterFollows: (follows, follow_type) => filterFollows(follows, follow_type),
}};

class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchFollows().then( () => this.setState({loading: false}))
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    const page = 'collection';
    const followedPlaylistIds = this.props.filterFollows(Object.values(this.props.follows), 'playlist');
    const followedArtistIds = this.props.filterFollows(Object.values(this.props.follows), 'artist');
    const favoritedAlbumIds = this.props.filterFollows(Object.values(this.props.follows), 'album');
    const favoritedSongIds = this.props.filterFollows(Object.values(this.props.follows), 'song');



    return (
      <div className="collection">
        <Navbar page={page} />
        <Switch>
          <Route path="/collection/albums" render={ () =>
              <AlbumsIndexContainer
                albumIds={favoritedAlbumIds} /> } />

            <Route path="/collection/artists" render={ () =>
                <ArtistsIndexContainer
                  followedArtistIds={followedArtistIds} /> } />

          <Route path="/collection/playlists" render={ () =>
              <PlaylistsIndexContainer
                currUserId={this.props.currUserId}
                followedPlaylistIds={followedPlaylistIds}/> } />

          <Route path="/collection/songs" render={ () =>
              <SongsIndexContainer
                songIds={favoritedSongIds}/> } />

          <Redirect to="/collection/albums" />
        </Switch>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
