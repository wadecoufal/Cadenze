import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SongsIndexContainer from '../songs/songs_index_container';
import { fetchPlaylist } from '../../actions/playlist_actions';

import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    follows: Object.values(state.entities.follows)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
})

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId)
      .then( () => this.setState({loading: false}));
  }

  userFollowingPlaylist() {
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.playlist.id
        && this.props.follows[i].followee_type === 'playlist') {
          return true;
        }
      i++;
    }
    return false;
  }

  handleDelete() {
    let deleteFollowId;
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.playlist.id
        && this.props.follows[i].followee_type === 'playlist') {
        deleteFollowId = this.props.follows[i].id;
      }
      i++;
    }
    this.props.deleteFollow(deleteFollowId);
  }

  handleFollow() {
    this.props.createFollow({
      followee_id: this.props.playlist.id,
      followee_type: 'playlist'
    })
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    const followBtn = this.userFollowingPlaylist() ? (
      <button
        className="follow-button"
        onClick={this.handleDelete}
        >UNFOLLOW PLAYLIST</button>
    ) : (
      <button
        className="follow-button"
        onClick={this.handleFollow}
        >FOLLOW PLAYLIST</button>
    )

    const playlist = this.props.playlist ? (
      <div className="collection-show">
        <div className="collection-img-info">
          <img className="collection-image" ></img>
          <div className="collection-info">
            <h3 className='playlist-show-title'>{this.props.playlist.title}</h3>
            <h6 className='playlist-show-username'>{this.props.playlist.user.username}</h6>
          </div>
          {followBtn}
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
