/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
const enhancer = reduxDevTools ? compose(applyMiddleware(thunkMiddleware), reduxDevTools) : applyMiddleware(thunkMiddleware);

const store = createStore(
  reducer,
  enhancer,
);

export default store;
