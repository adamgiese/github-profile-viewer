const users = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {
        ...state,
        details: action.userDetails,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default users;
