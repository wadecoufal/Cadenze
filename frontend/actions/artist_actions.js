import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})

export const fetchArtists = (params) => dispatch => {
  return ArtistApiUtil.fetchArtists(params)
    .then(artists => dispatch(receiveArtists(artists)),
          err => console.log(err))
};

export const fetchArtist = id => dispatch => {
  return ArtistApiUtil.fetchArtist(id)
    .then(artist => dispatch(receiveArtist(artist)))
};
