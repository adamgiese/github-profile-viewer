import { connect } from 'react-redux';
import Gist from '../components/Gist';

const mapStateToProps = (state) => {
  if (state.user && state.gists) {
    return {
      user: state.user,
      gist: state.gist,
      isLoaded: true,
    };
  }
  return {
    isLoaded: false,
  };
};

const GistContainer = connect(
  mapStateToProps,
)(Gist);

export default GistContainer;
