import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes';
import { Header } from 'components';
import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <Router>
      <ThemeProvider theme={theme === true ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header theme={theme} setTheme={setTheme} />
        {routes}
      </ThemeProvider>
    </Router>
  );
}

export default App;
