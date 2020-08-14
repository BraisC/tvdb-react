import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowsPage, SearchPage, GenrePage, ShowPage } from 'pages';

const createRoutes = () => (
  <Switch>
    <Route path={['/', '/shows/:category']} exact>
      <ShowsPage />
    </Route>
    <Route path="/genre/:genre" exact>
      <GenrePage />
    </Route>
    <Route path="/search/:query" exact>
      <SearchPage />
    </Route>
    <Route path="/show/:id" exact>
      <ShowPage />
    </Route>
  </Switch>
);

export default createRoutes;
