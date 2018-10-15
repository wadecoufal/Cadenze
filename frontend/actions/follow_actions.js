import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const fetchFollows = currUserId => dispatch => {
  return FollowApiUtil.fetchFollows(currUserId)
    .then(follows => dispatch(receiveFollows(follows)),
          err => console.log(err))
};
