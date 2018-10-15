import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchAlbums } from '../../actions/album_actions';

const msp = (state, ownProps) => {
  return {
  albums: Object.values(state.entities.albums),
  albumIds: ownProps.albumIds
}};

const mdp = dispatch => ({
  fetchAlbums: (params) => dispatch(fetchAlbums(params))
});

export default connect(msp, mdp)(AlbumsIndex);
