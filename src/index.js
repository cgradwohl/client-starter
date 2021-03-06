import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development') {
  console.log('WASS HANNIN');
  module.hot.accept();
}
