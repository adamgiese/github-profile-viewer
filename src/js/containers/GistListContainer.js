import { connect } from 'react-redux';
import GistList from '../components/GistList';

const mapStateToProps = (state) => {
  if (state.gist.list) {
    return {
      gists: state.gist.list,
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
