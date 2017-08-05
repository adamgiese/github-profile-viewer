const gists = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_GISTS':
      return { ...state, isFetching: true };
    case 'RECEIVE_GISTS':
      return {
        ...state,
        isFetching: false,
        list: action.gists,
        lastUpdated: action.receivedAt,
      };
    case 'REQUEST_GIST':
      return { ...state, isFetching: true };
    case 'RECEIVE_GIST':
      return {
        ...state,
        isFetching: false,
        details: action.gist,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default gists;
