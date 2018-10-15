import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  openModal: (modal, songId) => dispatch(openModal(modal, songId))
});

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { song } = this.props;

    return (
      <div className="song-index-item">
        <img className="play-btn" src={window.playBtn}></img>

        <div className="song-info">
          <div className="song-title-duration">
            <h4>{song.title}</h4>
            <div className="elipse-duration">


              <button
                onClick={() => this.props.openModal('newPlaylistSong', `${song.id}`)}
                className="button-strip"
              >
                <i className="fas fa-ellipsis-h">
                  <ul className="song-dropdown hidden">



                  </ul>
                </i>
              </button>


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

export default connect(null, mapDispatchToProps)(SongIndexItem);
