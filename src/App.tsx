import React from 'react';
import './assets/css/nucleo-icons.css';
import './assets/scss/blk-design-system-react.scss?v=1.0.0';
import './assets/demo/demo.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingPage } from './views';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
