import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  });

  it('should call RECEIVE_USER after fetching user details', () => {
    const details = {
      login: "adamgiese",
      avatar_url: "https://avatars0.githubusercontent.com/u/2007148?v=4",
      url: "https://api.github.com/users/adamgiese",
      name: "Adam Giese",
    };
    Date.now = jest.fn(() => 1500000000000)
    nock('https://api.github.com/')
      .get('/users/adamgiese')
      .reply(200, details);

    const expectedAction = [{
      userDetails: details,
      receivedAt: 1500000000000,
      type: 'RECEIVE_USER',
      user: 'adamgiese',
    }];
    const store = mockStore({});
    return store.dispatch(actions.fetchUserDetails('adamgiese')).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  });

  it('should call RECEIVE_REPOS after fetching repos', () => {
    const repos = [
      {
        id: 12345678,
        name: "test-repo",
      },
      {
        id: 98765432,
        name: "another-test",
      },
    ];
    Date.now = jest.fn(() => 1500000000000)
    nock('https://api.github.com/')
      .get('/users/adamgiese/repos?sort=updated')
      .reply(200, repos);

    const expectedAction = [{
      type: 'RECEIVE_REPOS',
      repos: repos,
      receivedAt: 1500000000000,
    }];
    const store = mockStore({});
    return store.dispatch(actions.fetchUserRepos('adamgiese')).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    });
  });

  it('should call RECEIVE_COMMITS after fetching commits', () => {
    const commits = [
      {
        sha: 12345678,
        name: "test-commit",
      },
      {
        sha: 98765432,
        name: "another-commit",
      },
    ];
    Date.now = jest.fn(() => 1500000000000)
    nock('https://api.github.com/')
      .get('/repos/adamgiese/test-repo/commits')
      .reply(200, commits);

    const expectedAction = [{
      type: 'RECEIVE_COMMITS',
      commits: commits,
      receivedAt: 1500000000000,
    }];
    const store = mockStore({});
    return store.dispatch(actions.fetchCommits('adamgiese', 'test-repo')).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    });
  });

  it('should call RECEIVE_GISTS after fetching gists', () => {
    const gists = [
      {
        id: 12345678,
        name: "test-gist",
      },
      {
        id: 98765432,
        name: "another-test",
      },
    ];
    Date.now = jest.fn(() => 1500000000000)
    nock('https://api.github.com/')
      .get('/users/adamgiese/gists')
      .reply(200, gists);

    const expectedAction = [{
      type: 'RECEIVE_GISTS',
      gists: gists,
      receivedAt: 1500000000000,
    }];
    const store = mockStore({});
    return store.dispatch(actions.fetchUserGists('adamgiese')).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    });
  });

  it('should call RECEIVE_GIST after fetching gist', () => {
    const gist = { 
      id: 12345678, 
      name: "test-gist",
    };
    Date.now = jest.fn(() => 1500000000000)
    nock('https://api.github.com/')
      .get('/gists/12345')
      .reply(200, gist);

    const expectedAction = [{
      type: 'RECEIVE_GIST',
      gist: gist,
      receivedAt: 1500000000000,
    }];
    const store = mockStore({});
    return store.dispatch(actions.fetchGist(12345)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    });
  });
});
