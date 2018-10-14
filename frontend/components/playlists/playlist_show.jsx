import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {playlist: state.entities.playlists[ownProps.match.params.playlistId - 1]}
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
})

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {

    const playlist = this.props.playlist ? (
      <div className="collection-show">
        <div className="collection-img-info">
          <img className="collection-image" ></img>
          <div className="collection-info">
            <h3>{this.props.playlist.title}</h3>
            <h6>{this.props.playlist.user.username}</h6>
          </div>
        </div>
        <div className="collection-songs">
          <SongsIndexContainer />
        </div>
      </div>
    ) : (
      <h4>No playlist to show here</h4>
    )

    return (
      <div>
        {playlist}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistShow));
