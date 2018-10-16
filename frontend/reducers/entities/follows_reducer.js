import {
  RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW
} from '../../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      const newState = Object.assign({}, state);
      const follow = {[action.follow.id]: action.follow};
      return Object.assign({}, newState, follow);
    case REMOVE_FOLLOW:
      const newStateRemove = Object.assign({}, state);
      delete newStateRemove[action.id]
      return newStateRemove;
    default:
      return state;
  }
}

export default followsReducer;
