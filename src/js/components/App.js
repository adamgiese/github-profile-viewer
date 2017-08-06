/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import UserProfileContainer from '../containers/UserProfileContainer';
import RepoContainer from '../containers/RepoContainer';
import GistContainer from '../containers/GistContainer';
import store from '../store';
import UserDetailsContainer from '../containers/UserDetailsContainer';

/* eslint-ensable no-unused-vars */

const App = (props) => {
  const onUserProfileEnter = (user) => {
  };

  return (
    <div className='app'>
      <header className='header'>
        <h1>Github Profile Viewer</h1>
      </header>
      <main className='main'>
        <aside className='main--sidebar'>
          <UserDetailsContainer />
        </aside>
        <section className='main--content'>
          <Route exact path="/" component={UserProfileContainer} />
          <Route exact path="/:repo/commits" component={RepoContainer} />
          <Route exact path="/gist/:gist" component={GistContainer} />
        </section>
      </main>
    </div>
  );
};

export default App;
