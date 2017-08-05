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
    user,
  };
}

export function requestUserRepos(user) {
  return {
    type: 'REQUEST_REPOS',
    user,
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

export function requestCommits() {
  return {
    type: 'REQUEST_COMMITS',
  };
}

export function requestGists() {
  return {
    type: 'REQUEST_GISTS',
  };
}

export function requestGist() {
  return {
    type: 'REQUEST_GIST',
  };
}

export function receiveRepos(user, repos) {
  return {
    type: 'RECEIVE_REPOS',
    repos,
    receivedAt: Date.now(),
  };
}

export function receiveCommits(commits) {
  return {
    type: 'RECEIVE_COMMITS',
    commits,
    receivedAt: Date.now(),
  };
}

export function receiveGists(gists) {
  return {
    type: 'RECEIVE_GISTS',
    gists,
    receivedAt: Date.now(),
  };
}

export function receiveGist(gist) {
  return {
    type: 'RECEIVE_GIST',
    gist,
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
    return fetch(`https://api.github.com/users/${user}/repos?sort=updated`)
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

export function fetchCommits(user, repo) {
  return (dispatch) => {
    dispatch(requestCommits(user));
    return fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
      .then(
        res => res.json(),
        /* eslint-disable no-console */
        err => console.log('There was an error:', err)
        /* eslint-enable no-console */
      )
      .then(
        response => dispatch(receiveCommits(response))
      );
  };
}

export function fetchUserGists(user) {
  return (dispatch) => {
    dispatch(requestGists(user));
    return fetch(`https://api.github.com/users/${user}/gists`)
      .then(
        res => res.json(),
        /* eslint-disable no-console */
        err => console.log('There was an error:', err)
        /* eslint-enable no-console */
      )
      .then(
        response => dispatch(receiveGists(response))
      );
  };
}

export function fetchGist(gist) {
  return (dispatch) => {
    dispatch(requestGist(gist));
    return fetch(`https://api.github.com/gists/${gist}`)
      .then(
        res => res.json(),
        /* eslint-disable no-console */
        err => console.log('There was an error:', err)
        /* eslint-enable no-console */
      )
      .then(
        response => dispatch(receiveGist(response))
      );
  };
}
