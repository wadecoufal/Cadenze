import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = state => ({
  formType: 'login',
  user: {username: "", password: ""}
});

const mdp = dispatch => ({
 action: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
