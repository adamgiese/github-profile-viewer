/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';
/* eslint-ensable no-unused-vars */

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
  return dispatch => fetch(`https://api.github.com/users/${user}`)
    .then(
      res => res.json(),
      /* eslint-disable no-console */
      err => console.log('There was an error:', err)
      /* eslint-enable no-console */
    )
    .then(
      response => dispatch(receiveUser(user, response))
    );
}

export function fetchUserRepos(user) {
  return dispatch => fetch(`https://api.github.com/users/${user}/repos?sort=updated`)
    .then(
      res => res.json(),
      /* eslint-disable no-console */
      err => console.log('There was an error:', err)
      /* eslint-enable no-console */
    )
    .then(
      response => dispatch(receiveRepos(user, response))
    );
}

export function fetchCommits(user, repo) {
  return dispatch => fetch(`https://api.github.com/repos/${user}/${repo}/commits`)
    .then(
      res => res.json(),
      /* eslint-disable no-console */
      err => console.log('There was an error:', err)
      /* eslint-enable no-console */
    )
    .then(
      response => dispatch(receiveCommits(response))
    );
}

export function fetchUserGists(user) {
  return dispatch => fetch(`https://api.github.com/users/${user}/gists`)
    .then(
      res => res.json(),
      /* eslint-disable no-console */
      err => console.log('There was an error:', err)
      /* eslint-enable no-console */
    )
    .then(
      response => dispatch(receiveGists(response))
    );
}

export function fetchGist(gist) {
  return dispatch => fetch(`https://api.github.com/gists/${gist}`)
    .then(
      res => res.json(),
      /* eslint-disable no-console */
      err => console.log('There was an error:', err)
      /* eslint-enable no-console */
    )
    .then(
      response => dispatch(receiveGist(response))
    );
}
