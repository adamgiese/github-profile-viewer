/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import { selectUser, fetchUserDetails, fetchUserRepos } from '../actions';
import store from '../store';

/* eslint-ensable no-unused-vars */

const App = (props) => {
  const onUserProfileEnter = (user) => {
    store.dispatch(selectUser(user));
    store.dispatch(fetchUserDetails(user));
    store.dispatch(fetchUserRepos(user));
  };
  return (
    <div className='app'>
      <h1>Github Profile Viewer</h1>
      <Link to="/about">About</Link>
      <Route exact path="/" component={UserProfile} onEnter={onUserProfileEnter('adamgiese')}/>
    </div>
  );
};

export default App;
