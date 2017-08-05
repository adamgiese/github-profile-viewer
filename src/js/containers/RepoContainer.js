import { connect } from 'react-redux';
import Repo from '../components/Repo';

const mapStateToProps = (state) => {
  if (state.user && state.repos) {
    return {
      user: state.user,
      repos: state.repos,
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
