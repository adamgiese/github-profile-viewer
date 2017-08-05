import { connect } from 'react-redux';
import GistList from '../components/GistList';

const mapStateToProps = (state) => {
  if (state.gists) {
    return {
      gists: state.gists,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const GistListContainer = connect(
  mapStateToProps,
)(GistList);

export default GistListContainer;
