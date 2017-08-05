/* eslint-disable no-unused-vars */
import React from 'react';
import RepoListContainer from '../containers/RepoListContainer';
import GistListContainer from '../containers/GistListContainer';
/* eslint-ensable no-unused-vars */

const UserProfile = props => (
  <div className='user-profile'>
    <RepoListContainer />
    <GistListContainer />
  </div>
);

export default UserProfile;
