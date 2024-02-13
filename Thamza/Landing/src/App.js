import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../src/routes';

import './assets/css/materialdesignicons.min.css';
import './assets/scss/themes.scss';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={<route.component />} key={idx} />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
