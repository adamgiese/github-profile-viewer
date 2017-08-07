import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to receive the details for a user', () => {
    const user = 'adamgiese';
    const userDetails = {
      username: user,
      id: 12345,
      url: 'https://example.com',
    };
    Date.now = jest.fn(() => 1500000000000)
    const expectedAction = {
      type: 'RECEIVE_USER',
      user,
      userDetails,
      receivedAt: 1500000000000,
    };
    expect(actions.receiveUser(user, userDetails)).toEqual(expectedAction);
  });

  it('should create an action to receive the repos for a user', () => {
    const repos = [ {
        id: 123,
        name: 'test-github-project',
      },
      {
        id: 987,
        name: 'another-test-project',
      }
    ];
    Date.now = jest.fn(() => 1500000000000)
    const expectedAction = {
      type: 'RECEIVE_REPOS',
      repos,
      receivedAt: 1500000000000,
    }
    expect(actions.receiveRepos(repos)).toEqual(expectedAction);
  });

  it('should create an action to receive the commits for a repo', () => {
    const commits = [ 
      {
        sha: '123456789abcdefghijklmnopqrstuvwxyzABCDE',
      },
      {
        sha: '987654321abcdefghijklmnopqrstuvwxyzABCDE',
      }
    ];
    Date.now = jest.fn(() => 1500000000000)
    const expectedAction = {
      type: 'RECEIVE_COMMITS',
      commits,
      receivedAt: 1500000000000,
    }
    expect(actions.receiveCommits(commits)).toEqual(expectedAction);
  });

  it('should create an action to receive the gists for a user', () => {
    const gists = [ 
      {
        id: 'afa6df7a96sdfa9s87df6a9sdfba9798',
        public: true,
      },
      {
        id: 'a7fa0s9df7adfbasdfbaweurhowieuhr',
        public: false,
      }
    ];
    Date.now = jest.fn(() => 1500000000000)
    const expectedAction = {
      type: 'RECEIVE_GISTS',
      gists,
      receivedAt: 1500000000000,
    }
    expect(actions.receiveGists(gists)).toEqual(expectedAction);
  });

  it('should create an action to receive the details to a gist', () => {
    const gist = {
      id: '98765432123456789876543212345678',
      description: 'A test description',
    };
    Date.now = jest.fn(() => 1500000000000)
    const expectedAction = {
      type: 'RECEIVE_GIST',
      gist,
      receivedAt: 1500000000000,
    }
    expect(actions.receiveGist(gist)).toEqual(expectedAction);
  });

});
