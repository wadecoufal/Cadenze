import { connect } from 'react-redux';
import ArtistsIndex from './artists_index';
import { fetchArtists } from '../../actions/artist_actions';

const msp = state => ({
  artists: Object.values(state.entities.artists)
});

const mdp = dispatch => ({
  fetchArtists: (params) => dispatch(fetchArtists(params))
});

export default connect(msp, mdp)(ArtistsIndex);
