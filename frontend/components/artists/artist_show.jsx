import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import SongsIndexContainer from '../songs/songs_index_container';
// import PlaylistsIndexContainer from '../playlists/playlists_index_container';
import AlbumsIndexContainer from '../albums/albums_index_container';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {artist: state.entities.artists[ownProps.match.params.artistId]}
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id))
})

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.artist;
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.artist || this.props.artist.id !== parseInt(newProps.match.params.artistId) ) {
      this.props.fetchArtist(newProps.match.params.artistId);
    }
  }

  render() {
    const artist = this.props.artist ? (
      <div className="artist-show">

        <div className="collection-img-info">
          {this.props.artist.name}
        </div>


        <div className="artists-albums">
          <AlbumsIndexContainer albumIds={this.props.artist.albumIds}/>
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
