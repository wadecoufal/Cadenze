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

export const fetchPlaylists = (params) => dispatch => {
  return PlaylistApiUtil.fetchPlaylists(params)
    .then(playlists => dispatch(receivePlaylists(playlists)))
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)),
          err => console.log(err))
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
};

export const createPlaylistSong = playlistSong => dispatch => {
  return PlaylistApiUtil.createPlaylistSong(playlistSong).then(null, err => console.log(err));
}
