import { connect } from 'react-redux';
import Gist from '../components/Gist';

const mapStateToProps = (state) => {
  if (state.user.username && state.gist.list) {
    return {
      user: state.user.username,
      gist: state.gist.list,
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
