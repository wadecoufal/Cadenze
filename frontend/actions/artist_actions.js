import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)),
          err => console.log(err))
};
