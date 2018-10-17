import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SongFavoriteButton from './song_favorite_button';

const mapDispatchToProps = dispatch => ({
  openModal: (modal, songId) => dispatch(openModal(modal, songId)),
  receiveQueue: (queue) => dispatch(receiveQueue(queue))
});

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { song } = this.props;

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

              <SongFavoriteButton songId={song.id} />

              <h4 className="duration">{song.durationStr}</h4>
            </div>
          </div>
          <div className="song-artist-album">
            <Link to={`/artist/${song.artistId}`}><h4 className="artist-album-link">{song.artistName}</h4></Link>
            <Link to={`/album/${song.albumId}`}><h4 className="artist-album-link">{song.albumTitle}</h4></Link>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SongIndexItem);
