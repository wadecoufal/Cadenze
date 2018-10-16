export const fetchArtists = (params) => (
  $.ajax({
    method: 'GET',
    url: 'api/artists',
    data: params
  })
);

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);
