import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapStateToProps = (state) => {
  if (state.userDetails) {
    return {
      display_name: state.userDetails.display_name,
      location: state.userDetails.location,
      company: state.userDetails.company,
      bio: state.userDetails.bio,
      image_src: state.userDetails.image_src,
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
