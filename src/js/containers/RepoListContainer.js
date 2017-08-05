import { connect } from 'react-redux';
import RepoList from '../components/RepoList';

const mapStateToProps = (state) => {
  if (state.repo.list) {
    return {
      repos: state.repo.list,
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
