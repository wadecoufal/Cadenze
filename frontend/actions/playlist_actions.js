import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
})

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)))
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)),
          err => console.log(err))
};
