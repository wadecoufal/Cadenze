import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {playlist: state.entities.playlists[ownProps.match.params.playlistId]}
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id))
})

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
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
        <div className="collection-songs playlist-show-songs">
          <SongsIndexContainer songIds={this.props.playlist.song_ids}/>
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
