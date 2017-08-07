const repos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_REPOS':
      return {
        ...state,
        list: action.repos,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default repos;
