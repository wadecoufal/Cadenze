import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';

const msp = state => ({
  songs: state.entities.songs
});

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(msp, mdp)(SongsIndex);
