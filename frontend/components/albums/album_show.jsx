import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {album: state.entities.albums[ownProps.match.params.albumId]}
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id))
})

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.album;
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {

    const album = this.props.album ? (
      <div className="collection-show">
        <div className="collection-img-info">
          <img className="collection-image" src={this.props.album.photoUrl}></img>
          <div className="collection-info">
            <h3>{this.props.album.title}</h3>
            <h6>{this.props.album.artistName}</h6>
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
