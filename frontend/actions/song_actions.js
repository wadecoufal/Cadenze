import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs)),
          err => console.log(err))
};
