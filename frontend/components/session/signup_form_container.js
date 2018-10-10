import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, demoLogin } from '../../actions/session_actions';

const msp = state => ({
  formType: 'signup',
  user: {username: "", password: "", email: ""},
  errors: state.errors.userErrors
});

const mdp = dispatch => ({
  action: user => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(msp, mdp)(SessionForm);
