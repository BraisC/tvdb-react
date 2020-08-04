import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components';

import { MyThemeProvider } from './contexts/myThemeContext';

ReactDOM.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
  document.getElementById('root')
);

//Prueba
