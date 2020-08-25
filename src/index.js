import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { ConfigProvider } from 'contexts/configContext';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { MyThemeProvider } from './contexts/myThemeContext';

Sentry.init({
  dsn: 'https://af92a6ebc86f44639fad2209a03aa749@o438950.ingest.sentry.io/5404882',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <MyThemeProvider>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </MyThemeProvider>,
  document.getElementById('root')
);
