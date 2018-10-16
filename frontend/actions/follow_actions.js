import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = id => ({
  type: REMOVE_FOLLOW,
  id
});

export const fetchFollows = currUserId => dispatch => {
  return FollowApiUtil.fetchFollows(currUserId)
    .then(follows => dispatch(receiveFollows(follows)),
          err => console.log(err))
};

export const createFollow = follow => dispatch => {
  return FollowApiUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)),
          err => console.log(err))
};

export const deleteFollow = id => dispatch => {
  return FollowApiUtil.deleteFollow(id)
    .then( () => dispatch(removeFollow(id)),
          err => console.log(err))
};
