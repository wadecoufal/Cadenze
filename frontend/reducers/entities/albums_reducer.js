import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM
} from '../../actions/album_actions';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const newState = Object.assign({}, state)
      const album = {[action.album.id]: action.album}
      return Object.assign({}, newState, album)
    default:
      return state;
  }
}

export default albumsReducer;
