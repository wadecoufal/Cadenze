export const fetchSongs = (params) => {
  return $.ajax({
    method: "GET",
    url: 'api/songs',
    data: params
  })
};
