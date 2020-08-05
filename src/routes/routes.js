import React from 'react';
import { Route } from 'react-router-dom';
import { ShowsPage } from 'pages';

const routes = (
  <div>
    <Route path={['/', '/shows/:category']} exact>
      <ShowsPage />
    </Route>
  </div>
);

export default routes;
