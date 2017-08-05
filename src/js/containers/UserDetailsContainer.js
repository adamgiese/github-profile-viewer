import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapStateToProps = (state) => {
  if (state.user.details) {
    return {
      display_name: state.user.details.display_name,
      location: state.user.details.location,
      company: state.user.details.company,
      bio: state.user.details.bio,
      image_src: state.user.details.avatar_url,
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
