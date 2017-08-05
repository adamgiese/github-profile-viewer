import { connect } from 'react-redux';
import Commits from '../components/Commits';

const mapStateToProps = (state) => {
  if (state.commit.list) {
    return {
      commits: state.commit.list,
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
