import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapDispatchToProps = dispatch => ({
  openModal: (modal, songId) => dispatch(openModal(modal, songId)),
  receiveQueue: (queue) => dispatch(receiveQueue(queue)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

const mapStateToProps = (state, ownProps) => ({
  favorited: ownProps.favorited,
  follows: Object.values(state.entities.follows)
});

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    this.props.createFollow({
      followee_id: this.props.song.id,
      followee_type: 'song'
    })
  }

  handleDelete() {
    let deleteFollowId;
    let i = 0;
    while (i < this.props.follows.length) {
      if (this.props.follows[i].followee_id === this.props.song.id
        && this.props.follows[i].followee_type === 'song') {
        deleteFollowId = this.props.follows[i].id;
      }
      i++;
    }
    this.props.deleteFollow(deleteFollowId);
  }

  render() {
    const { song } = this.props;
    const songFavoriteBtn = this.props.favorited ? (
      <button
        className="song-favorite-button lock"
        onClick={this.handleDelete}>
        <i className="fas fa-check icon-unlock"></i>
        <i className="fas fa-times icon-lock"></i>
      </button>
    ) : (
      <button
        className="song-favorite-button"
        onClick={this.handleFavorite}
        ><i className="fas fa-plus"></i>
      </button>
    )

    return (
      <div className="song-index-item">
        <button className="song-item-play-btn" onClick={() => this.props.addToQueue(song.id)}>

          <img className="play-btn" src={window.playBtn}></img>
        </button>


        <div className="song-info">
          <div className="song-title-duration">
            <h4>{song.title}</h4>
            <div className="elipse-duration">


              <button
                onClick={() => this.props.openModal('newPlaylistSong', `${song.id}`)}
                className="button-strip">
                <i className="fas fa-ellipsis-h"></i>

              </button>

              {songFavoriteBtn}

              <h4 className="duration">{song.durationStr}</h4>
            </div>
          </div>
          <div className="song-artist-album">
            <h4 className="artist-album-link">{song.artistName}</h4>
            <h4 className="artist-album-link">{song.albumTitle}</h4>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongIndexItem);
