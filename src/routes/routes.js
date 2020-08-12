import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowsPage, SearchPage } from 'pages';

const createRoutes = () => (
  <Switch>
    <Route path={['/', '/shows/:category']} exact>
      <ShowsPage />
    </Route>
    <Route path="/search/:query" exact>
      <SearchPage />
    </Route>
  </Switch>
);

export default createRoutes;
