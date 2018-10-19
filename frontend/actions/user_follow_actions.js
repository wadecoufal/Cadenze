import * as UserFollowApiUtil from '../util/user_follow_util';

import { receiveCurrentUser } from './session_actions';

export const createUserFollow = userFollowId => dispatch => {
  debugger;
  return UserFollowApiUtil.createUserFollow(userFollowId)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => console.log(err.responseJSON))
};

export const deleteUserFollow = userFollowId => dispatch => {
  return UserFollowApiUtil.deleteUserFollow(userFollowId)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => console.log(err.responseJSON));
};
