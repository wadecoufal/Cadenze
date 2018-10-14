import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST
} from '../../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state);
      const artist = {[action.artist.id]: action.artist};
      return Object.assign({}, newState, artist)
    default:
      return state;
  }
}

export default artistsReducer;
