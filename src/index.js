/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './reducers/index';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <Routes />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
