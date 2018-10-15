import { connect } from 'react-redux';
import PlaylistsIndex from './playlists_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const msp = (state, ownProps) => {
  return{
  playlists: Object.values(state.entities.playlists),
  currUserId: ownProps.currUserId
}};

const mdp = dispatch => ({
  fetchPlaylists: (params) => dispatch(fetchPlaylists(params))
});

export default connect(msp, mdp)(PlaylistsIndex);
