import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SIGNIN_ERRORS = "RECEIVE_SIGNIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSigninErrors = (errors) => ({
  type: RECEIVE_SIGNIN_ERRORS,
  errors
})

const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
})

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveSignupErrors(err.responseJSON)));
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveSigninErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then( () => dispatch(logoutCurrentUser()))
};
