import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import UserPage from './routes/UserPage';
import SearchPage from './routes/SearchPage';

import { LANDING_PAGE, USER_PAGE, SEARCH_PAGE } from './constants';

export default () => (
  <Router>
    <Switch>
      <Route path={LANDING_PAGE} exact component={LandingPage} />
      <Route path={USER_PAGE} component={UserPage} />
      <Route path={SEARCH_PAGE} component={SearchPage} />
    </Switch>
  </Router>
);
