import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes';
import { Header } from 'components';

function App() {
  return (
    <Router>
      <Header />
      {routes}
    </Router>
  );
}

export default App;
