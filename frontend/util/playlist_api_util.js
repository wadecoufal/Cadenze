export const fetchPlaylists = (params) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data: params
  })
};

export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: { playlist }
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: "GET",
    url: `api/playlists/${id}`
  })
);

export const createPlaylistSong = playlistSong => (
  $.ajax({
    method: 'POST',
    url: 'api/playlist_songs',
    data: {playlist_song: playlistSong}
  })
);
