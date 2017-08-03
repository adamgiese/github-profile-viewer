const handleActions = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return { ...state, user: action.user };
    case 'REQUEST_USER_PROFILE':
      return { ...state, isFetching: true };
    case 'RECEIVE_USER':
      console.log(action.userDetails.name);
      return {
        ...state,
        isFetching: false,
        userDetails: {
          display_name: action.userDetails.name,
          company: action.userDetails.company,
          bio: action.userDetails.bio,
          location: action.userDetails.location,
          image_src: action.userDetails.avatar_url,
        },
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};
export default handleActions;
