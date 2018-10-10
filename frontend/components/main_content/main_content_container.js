import { connect } from 'react-redux';
import MainContent from './main_content';

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mdp)(MainContent);
