import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ShowsPage, SearchPage, GenrePage, ShowPage, SeasonPage, PeoplePage } from 'pages';

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
    <Route path="/people/:id" exact>
      <PeoplePage />
    </Route>
    <Route path="/show/:id/season/:number" exact>
      <SeasonPage />
    </Route>
    <Route path="/404" exact>
      "ustedes"
    </Route>
    <Redirect from="*" to="/404" />
  </Switch>
);

export default createRoutes;
