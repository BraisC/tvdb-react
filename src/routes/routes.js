import React from 'react';
import { Route } from 'react-router-dom';
import { Popular } from 'pages';

const routes = (
  <div>
    <Route path="/" exact>
      <Popular />
    </Route>
  </div>
);

export default routes;
