/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';
/* eslint-ensable no-unused-vars */

export function selectUser(user) {
  return {
    type: 'SELECT_USER',
    user,
  };
}

export function requestUserProfile(user) {
  return {
    type: 'REQUEST_USER_PROFILE',
  };
}

export function requestUserRepos(user) {
  return {
    type: 'REQUEST_USER_REPOS',
  };
}

export function receiveUser(user, userDetails) {
  return {
    type: 'RECEIVE_USER',
    user,
    userDetails,
    receivedAt: Date.now(),
  };
}

export function receiveRepos(user, repos) {
  return {
    type: 'RECEIVE_REPOS',
    repos,
    receivedAt: Date.now(),
  };
}

// async actions

export function fetchUserDetails(user) {
  return (dispatch) => {
    dispatch(requestUserProfile(user));
    return fetch(`https://api.github.com/users/${user}`)
      .then(
        res => res.json(),
        /* eslint-disable no-console */
        err => console.log('There was an error:', err)
        /* eslint-enable no-console */
      )
      .then(
        response => dispatch(receiveUser(user, response))
      );
  };
}

export function fetchUserRepos(user) {
  return (dispatch) => {
    dispatch(requestUserRepos(user));
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then(
        res => res.json(),
        /* eslint-disable no-console */
        err => console.log('There was an error:', err)
        /* eslint-enable no-console */
      )
      .then(
        response => dispatch(receiveRepos(user, response))
      );
  };
}
