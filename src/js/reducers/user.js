const users = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return { ...state, username: action.user };
    case 'REQUEST_USER_PROFILE':
      return { ...state, isFetching: true };
    case 'RECEIVE_USER':
      return {
        ...state,
        isFetching: false,
        details: action.userDetails,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default users;
