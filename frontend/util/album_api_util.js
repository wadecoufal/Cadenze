export const fetchAlbums = params => (
  $.ajax({
    method: 'GET',
    url: 'api/albums',
    data: params
  })
);

export const fetchAlbum = id => (
  $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  })
);

// export const fetchAlbum = id => (
//   $.ajax({
//     method: "GET",
//     url: `api/albums/${id}`
//   })
// )
