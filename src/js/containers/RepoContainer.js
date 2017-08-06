import { connect } from 'react-redux';
import Repo from '../components/Repo';

const mapStateToProps = (state) => {
  if (state.user.username && state.repo.list) {
    return {
      user: state.user,
      repos: state.repo.list,
      isLoaded: true,
    };
  }
  return {
    user: state.user,
    isLoaded: false,
  };
};

const RepoContainer = connect(
  mapStateToProps,
)(Repo);

export default RepoContainer;
