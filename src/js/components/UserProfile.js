/* eslint-disable no-unused-vars */
import React from 'react';
import UserDetailsContainer from '../containers/UserDetailsContainer';
import RepoListContainer from '../containers/RepoListContainer';
/* eslint-ensable no-unused-vars */

const UserProfile = props => (
  <div className='user-profile'>
    <UserDetailsContainer />
    <RepoListContainer />
  </div>
);

export default UserProfile;
