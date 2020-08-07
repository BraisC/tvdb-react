import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowsPage } from 'pages';

const routes = (
  <Switch>
    <Route path={['/', '/shows/:category']} exact>
      <ShowsPage />
    </Route>
  </Switch>
);

export default routes;
