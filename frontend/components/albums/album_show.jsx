import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {album: state.entities.albums[ownProps.match.params.albumId - 1]}
};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
})

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.album;
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {

    const album = this.props.album ? (
      <div className="collection-show">
        <div className="collection-img-info">
          <img className="collection-image" src={this.props.album.photoUrl}></img>
          <div className="collection-info">
            <h3>{this.props.album.title}</h3>
            <h6>{this.props.album.artist.name}</h6>
          </div>
        </div>
        <div className="collection-songs">
          <SongsIndexContainer />
        </div>
      </div>
    ) : (
      <h4>No album to show here</h4>
    )

    return (
      <div>
        {album}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumShow));
