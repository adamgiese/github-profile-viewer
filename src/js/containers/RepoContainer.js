import { connect } from 'react-redux';
import Repo from '../components/Repo';

const mapStateToProps = (state) => {
  if (state.user.username && state.repo.list) {
    return {
      user: state.user.username,
      repos: state.repo.list,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const RepoContainer = connect(
  mapStateToProps,
)(Repo);

export default RepoContainer;
