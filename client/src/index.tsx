import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { StoreProvider } from 'easy-peasy';

import 'antd/dist/antd.css';

import store from './store';
import App from './App';
import HomePage from './pages/Home';
import FavoritesPage from './pages/Favorites';
import NotFound from './pages/NotFound';
import SourceProductsPage from './pages/SourceProducts';

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavoritesPage path="/favorites" />
        <SourceProductsPage path="sources/:slug" />
        <NotFound default />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root'),
);
