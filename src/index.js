import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { ConfigProvider } from 'contexts/configContext';
import { MyThemeProvider } from './contexts/myThemeContext';

ReactDOM.render(
  <MyThemeProvider>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </MyThemeProvider>,
  document.getElementById('root')
);
