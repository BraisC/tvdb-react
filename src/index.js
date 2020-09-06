import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { ConfigProvider } from 'contexts/configContext';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { MyThemeProvider } from './contexts/myThemeContext';

if (process.env.REACT_APP_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <MyThemeProvider>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </MyThemeProvider>,
  document.getElementById('root')
);
