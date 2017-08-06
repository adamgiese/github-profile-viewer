/* eslint-disable no-unused-vars */
import React from 'react';
import CommitsContainer from '../containers/CommitsContainer';
import RepoDetails from './RepoDetails';
import store from '../store';
import { fetchCommits, fetchUserDetails, fetchUserRepos } from '../actions';
/* eslint-ensable no-unused-vars */

export default class Repo extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      store.dispatch(fetchCommits(this.props.user.username, this.props.match.params.repo));

      if (!this.props.user.details) {
        store.dispatch(fetchUserDetails(this.props.user.username));
      }
      if (!this.props.repos) {
        store.dispatch(fetchUserRepos(this.props.user.username));
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.username && nextProps.user.username !== this.props.user.username) {
      store.dispatch(fetchCommits(nextProps.user.username, this.props.match.params.repo));
    }
  }

  render() {
    const details = this.props.repos ? this.props.repos.find(
      repo => repo.name === this.props.match.params.repo
    ) : false;

    return (
      <div className='repo'>
        { details ? <RepoDetails details={details} /> : '' }
        <CommitsContainer />
      </div>
    );
  }
}
