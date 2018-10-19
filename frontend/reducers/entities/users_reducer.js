import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER
} from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currUser = {[action.user.id]: action.user}
      return Object.assign({}, state, currUser);
    case RECEIVE_USER:
      const addedUser = {[action.user.id]: action.user}
      return Object.assign({}, state, addedUser)
    default:
      return state
  }
}

export default usersReducer;
