export const fetchPlaylists = (params) => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists',
    data: params
  })
);

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
