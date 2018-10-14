import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import SongsIndexContainer from '../songs/songs_index_container';
import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {artist: state.entities.artists[ownProps.match.params.artistId - 1]}
};

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
})

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.artist;
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {

    const artist = this.props.artist ? (
      <div className="artist-show">

        <div className="collection-img-info">

        </div>


        <div className="artists-albums">
          <AlbumsIndexContainer />
        </div>

        <div className="artists-playlists">
          <PlaylistIndexContainer />
        </div>
      </div>
    ) : (
      <h4>No artist to show here</h4>
    )

    return (
      <div>
        {artist}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistShow));
