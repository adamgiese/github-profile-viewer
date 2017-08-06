/* eslint-disable no-unused-vars */
import React from 'react';
import store from '../store';
import RepoListContainer from '../containers/RepoListContainer';
import GistListContainer from '../containers/GistListContainer';
import { selectUser, fetchUserDetails, fetchUserRepos, fetchUserGists } from '../actions';
/* eslint-ensable no-unused-vars */

export default class UserProfile extends React.Component {
  componentDidMount() {
    store.dispatch(selectUser(this.props.username));
    store.dispatch(fetchUserDetails(this.props.username));
    store.dispatch(fetchUserRepos(this.props.username));
    store.dispatch(fetchUserGists(this.props.username));
  }
  render() {
    return (
      <div className='user-profile'>
        <RepoListContainer />
        <GistListContainer />
      </div>
    );
  }
}
