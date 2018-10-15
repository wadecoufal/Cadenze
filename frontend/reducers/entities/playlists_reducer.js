import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST
} from '../../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      const newState = Object.assign({}, state)
      const playlist = {[action.playlist.id]: action.playlist}
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default playlistsReducer;
