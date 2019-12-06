import React from 'react';
import ReactDOM from 'react-dom';

import WindowProvider from './contexts/Window';

import Layout from './components/Layout';

import App from './components/App';

import './styles/index.scss';

const Dashboard = () => (
  <WindowProvider>
    <Layout>
      <App />
    </Layout>
  </WindowProvider>
);

ReactDOM.render(
  <Dashboard />,
  document.getElementById('dashboard'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
