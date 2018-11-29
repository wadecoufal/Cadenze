import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylistSong, fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndexItem from './playlist_index_item';
import { usersPlaylists } from '../../util/selectors'

const mapStateToProps = state => ({
  playlists: usersPlaylists(Object.values(state.entities.playlists), state.session.id),
  currUserId: state.session.id,
  songId: state.ui.modal.songId
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createPlaylistSong: playlistSong => dispatch(createPlaylistSong(playlistSong)),
  fetchPlaylists: params => dispatch(fetchPlaylists(params))
});

class PlaylistSongForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist_id: null,
      song_id: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylistSong(
      {song_id: this.props.songId, playlist_id: e.currentTarget.getAttribute('data-playlist-id')}
    );
    this.props.closeModal();
  }

  componentDidMount() {
    this.props.fetchPlaylists({curr_user_id: this.props.currUserId});
  }

  titleInitials(title) {
    return title.split(' ')
      .map( word => word[0].toUpperCase()).join('')
  }

  render() {
    return (
      <div className="playlist-song-form">
        <button className="x-btn button-strip" onClick={this.props.closeModal}>X</button>

        <h1 className="playlist-form-header">Add to playlist</h1>


        <form>
          <ul className="item-rows user-playlists">
            {this.props.playlists.map( playlist => {
              return (
                <button
                  data-playlist-id={`${playlist.id}`}
                  onClick={this.handleSubmit}
                  className="button-strip"
                  key={playlist.id}
                >
                  <div className="collection-index-item">

                    <div className="collection-image-container">
                      <div className="playlist-img">
                        <h4 className="playlist-img-title">{this.titleInitials(playlist.title)}</h4>
                      </div>
                      <div className="image-overlay">
                      </div>
                    </div>

                    <h3 className="collection-title">{playlist.title}</h3>
                    <h3 className="collection-creator">{playlist.user.username}</h3>
                  </div>
                </button>
              )
            })}
          </ul>


        </form>



      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongForm);
