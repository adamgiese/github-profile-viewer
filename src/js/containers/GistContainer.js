import { connect } from 'react-redux';
import Gist from '../components/Gist';

const mapStateToProps = (state) => {
  if (state.user.username && state.gist.details) {
    return {
      user: state.user,
      gist: state.gist.details,
      isLoaded: true,
    };
  }
  return {
    user: state.user,
    isLoaded: false,
  };
};

const GistContainer = connect(
  mapStateToProps,
)(Gist);

export default GistContainer;
