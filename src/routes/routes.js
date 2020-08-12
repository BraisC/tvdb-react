import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowsPage, SearchPage } from 'pages';
import { AnimatePresence } from 'framer-motion';

const Routes = () => (
  <AnimatePresence>
    <Switch>
      <Route path={['/', '/shows/:category']} exact>
        <ShowsPage />
      </Route>
      <Route path="/search/:query" exact>
        <SearchPage />
      </Route>
    </Switch>
  </AnimatePresence>
);

export default Routes;
