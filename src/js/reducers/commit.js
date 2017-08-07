const commits = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_COMMITS':
      return {
        ...state,
        list: action.commits,
      };
    default:
      return state;
  }
};

export default commits;
