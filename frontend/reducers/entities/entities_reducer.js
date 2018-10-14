import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import playlistsReducer from './playlists_reducer';

export default combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  songs: songsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer
});
