import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST
} from '../../actions/playlist_actions';

const playlistsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      const newState = state.slice()
      newState.push(action.playlist)
      return newState;
    default:
      return state;
  }
}

export default playlistsReducer;
