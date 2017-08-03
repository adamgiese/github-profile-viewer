const handleActions = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return { ...state, user: action.user };
    case 'REQUEST_USER_PROFILE':
      return { ...state, isFetchingUser: true };
    case 'RECEIVE_USER':
      return {
        ...state,
        isFetchingUser: false,
        userDetails: {
          display_name: action.userDetails.name,
          company: action.userDetails.company,
          bio: action.userDetails.bio,
          location: action.userDetails.location,
          image_src: action.userDetails.avatar_url,
        },
        lastUpdated: action.receivedAt,
      };
    case 'REQUEST_USER_REPOS':
      return { ...state, isFetchingRepos: true };
    case 'RECEIVE_REPOS':
      return {
        ...state,
        isFetchingRepos: false,
        repos: action.repos,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};
export default handleActions;
