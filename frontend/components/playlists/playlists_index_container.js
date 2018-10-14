import { connect } from 'react-redux';
import PlaylistsIndex from './playlists_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const msp = state => ({
  playlists: state.entities.playlists
});

const mdp = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(msp, mdp)(PlaylistsIndex);
