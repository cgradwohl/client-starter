import React from 'react';

import { Router } from '@reach/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import icons from './utils/icons';

// import Admin from './pages/Admin';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import './styles/index.scss';

library.add(icons);

const App = () => (
  <Router>
    {/* <Admin path="/admin" /> */}
    <Dashboard path="/dashboard" />
    {/* <Login path="/" /> */}
  </Router>
);

export default App;
