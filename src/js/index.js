/* global document */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import WebFont from 'webfontloader';
import store from './store';
import App from './components/App';
/* eslint-ensable no-unused-vars */

// styling
require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Lato'],
  },
});

// app init
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
