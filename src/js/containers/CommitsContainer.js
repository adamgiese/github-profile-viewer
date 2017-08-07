import { connect } from 'react-redux';
import Commits from '../components/Commits';

const mapStateToProps = (state) => {
  if (state.commit.list) {
    return {
      commits: state.commit.list.filter(
        commit => Date.parse(commit.commit.committer.date) > Date.now() - 2.628e+9 // 2.628e+9 is 1 month in milliseconds
      ),
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
