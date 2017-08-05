import { combineReducers } from 'redux';
import commit from './commit';
import gist from './gist';
import repo from './repo';
import user from './user';


export default combineReducers({
  commit,
  gist,
  repo,
  user,
});
