import { connect } from 'react-redux';
import Commits from '../components/Commits';

const mapStateToProps = (state) => {
  if (state.commits) {
    return {
      commits: state.commits,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const CommitsContainer = connect(
  mapStateToProps,
)(Commits);

export default CommitsContainer;
