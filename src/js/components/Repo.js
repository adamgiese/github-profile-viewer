/* eslint-disable no-unused-vars */
import React from 'react';
import CommitsContainer from '../containers/CommitsContainer';
import RepoDetails from './RepoDetails';
import store from '../store';
import { fetchCommits } from '../actions';
/* eslint-ensable no-unused-vars */

export default class Repo extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      store.dispatch(fetchCommits(this.props.user, this.props.match.params.repo));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user !== this.props.user) {
      store.dispatch(fetchCommits(nextProps.user, this.props.match.params.repo));
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
