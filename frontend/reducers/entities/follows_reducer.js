import {
  RECEIVE_FOLLOWS
} from '../../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
}

export default followsReducer;
