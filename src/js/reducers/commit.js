const commits = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_COMMITS':
      return { ...state, isFetching: true };
    case 'RECEIVE_COMMITS':
      return {
        ...state,
        isFetching: false,
        list: action.commits,
      };
    default:
      return state;
  }
};

export default commits;
