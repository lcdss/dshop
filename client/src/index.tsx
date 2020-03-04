import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import 'antd/dist/antd.css';

import App from './App';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router>
    <App path="/">
      <HomePage path="/" />
      <NotFound default />
    </App>
  </Router>,
  document.getElementById('root'),
);
