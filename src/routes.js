import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main/index';

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        render={props => <Main title="Main" />}
      />
    </div>
  </Router>
);

export default App;
