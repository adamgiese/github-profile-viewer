/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const enhancer = reduxDevTools ? compose(applyMiddleware(thunkMiddleware), reduxDevTools) : applyMiddleware(thunkMiddleware);

const store = createStore(
  reducer,
  {
    user: {
      username: 'adamgiese',
    },
  },
  enhancer,
);

export default store;
