export const fetchSongs = (params) => (
  $.ajax({
    method: "GET",
    url: 'api/songs',
    data: params
  })
);
