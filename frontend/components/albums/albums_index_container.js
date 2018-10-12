import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { fetchAlbums } from '../../actions/album_actions';

const msp = state => ({
  albums: state.entities.albums
});

const mdp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(msp, mdp)(AlbumsIndex);
