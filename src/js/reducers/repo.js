const repos = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_REPOS':
      return { ...state, isFetching: true };
    case 'RECEIVE_REPOS':
      return {
        ...state,
        isFetching: false,
        list: action.repos,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default repos;
