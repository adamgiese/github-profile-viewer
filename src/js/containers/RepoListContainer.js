import { connect } from 'react-redux';
import RepoList from '../components/RepoList';

const mapStateToProps = (state) => {
  if (state.repos) {
    return {
      repos: state.repos,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const RepoListContainer = connect(
  mapStateToProps,
)(RepoList);

export default RepoListContainer;
