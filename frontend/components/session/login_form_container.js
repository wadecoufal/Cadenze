import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, demoLogin, clearErrors } from '../../actions/session_actions';

const msp = state => ({
  formType: 'login',
  user: {username: "", password: ""},
  errors: state.errors.sessionErrors
});

const mdp = dispatch => ({
 action: user => dispatch(login(user)),
 demoLogin: () => dispatch(demoLogin()),
 clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);
