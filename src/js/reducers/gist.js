const gists = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_GISTS':
      return {
        ...state,
        list: action.gists,
        lastUpdated: action.receivedAt,
      };
    case 'RECEIVE_GIST':
      return {
        ...state,
        details: action.gist,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default gists;
