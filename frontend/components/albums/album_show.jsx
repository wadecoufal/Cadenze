import React from 'react';
import { connect } from 'react-redux';
import SongsIndexContainer from '../songs/songs_index_container';

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId - 1]
});

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const album = this.props.album ? (
      <div className="album-show">
        <div className="album-img-info">
          <img className="album-image" src={this.props.album.photoUrl}></img>
          <div className="album-info">
            <h3>{this.props.album.title}</h3>
            <h6>{this.props.album.artist.name}</h6>
          </div>
        </div>
        <div className="album-songs">
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

export default connect(mapStateToProps)(AlbumShow);
