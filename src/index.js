/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Routes from './components/Routes.js';
import store from './reducers/index';

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
  ,
  document.getElementById('root'),
);