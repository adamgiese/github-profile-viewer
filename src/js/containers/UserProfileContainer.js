import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';

const mapStateToProps = state => ({
  username: state.user.username,
});

const UserProfileContainer = connect(
  mapStateToProps,
)(UserProfile);

export default UserProfileContainer;
