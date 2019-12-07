import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from '@reach/router';

import Layout from './components/Layout';

import Admin from './pages/Admin';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import './styles/index.scss';

const App = () => (
  <Layout>
    <Router>
      <Admin path="/admin" />
      <Dashboard path="/dashboard" />
      <Login path="/" />
    </Router>
  </Layout>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
