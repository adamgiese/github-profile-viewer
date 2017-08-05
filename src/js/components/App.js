/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import RepoContainer from '../containers/RepoContainer';
import GistContainer from '../containers/GistContainer';
import { selectUser, fetchUserDetails, fetchUserRepos, fetchUserGists } from '../actions';
import store from '../store';
import UserDetailsContainer from '../containers/UserDetailsContainer';

/* eslint-ensable no-unused-vars */

const App = (props) => {
  const onUserProfileEnter = (user) => {
    store.dispatch(selectUser(user));
    store.dispatch(fetchUserDetails(user));
    store.dispatch(fetchUserRepos(user));
    store.dispatch(fetchUserGists(user));
  };

  return (
    <div className='app'>
      <header>
        <h1>Github Profile Viewer</h1>
      </header>
      <main>
        <UserDetailsContainer />
        <div className='routes'>
          <Route exact path="/" component={UserProfile} onEnter={onUserProfileEnter('adamgiese')}/>
          <Route exact path="/:repo/commits" component={RepoContainer} />
          <Route exact path="/gist/:gist" component={GistContainer} />
        </div>
      </main>
    </div>
  );
};

export default App;
