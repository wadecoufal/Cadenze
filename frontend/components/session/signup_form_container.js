import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => ({
  formType: 'signup'
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(SessionForm);
