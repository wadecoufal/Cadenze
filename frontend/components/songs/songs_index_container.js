import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';
import { receiveQueue } from '../../actions/queue_actions';

const msp = (state, ownProps) => {
  return{
  songs: Object.values(state.entities.songs),
  songIds: ownProps.songIds,
  follows: Object.values(state.entities.follows)
}};

const mdp = dispatch => ({
  fetchSongs: (params) => dispatch(fetchSongs(params)),
  receiveQueue: (queue) => dispatch(receiveQueue(queue))
});

export default connect(msp, mdp)(SongsIndex);
