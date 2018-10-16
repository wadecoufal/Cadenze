import { connect } from 'react-redux';
import MainContent from './main_content';
import { fetchFollows } from '../../actions/follow_actions';

const mdp = dispatch => ({
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(null, mdp)(MainContent);
