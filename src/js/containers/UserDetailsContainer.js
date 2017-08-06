import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapStateToProps = (state) => {
  if (state.user.details) {
    return {
      details: state.user.details,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const UserDetailsContainer = connect(
  mapStateToProps,
)(UserDetails);

export default UserDetailsContainer;
