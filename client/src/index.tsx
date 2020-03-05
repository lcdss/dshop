import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { StoreProvider } from 'easy-peasy';

import 'antd/dist/antd.css';

import store from './store';
import App from './App';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <NotFound default />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root'),
);
