import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import routes from 'routes';

function App() {
  return <Router>{routes}</Router>;
}

export default App;
