
import { connect } from 'react-redux';
import RepoDetails from '../components/RepoDetails';

const mapStateToProps = (state) => {
  if (state.repos) {
    console.log(state);
    return {
      repo: state.repos,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const RepoDetailsContainer = connect(
  mapStateToProps,
)(RepoDetails);

export default RepoDetailsContainer;
