import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes';
import { Header } from 'components';
import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';
import { MyThemeContext } from 'contexts/myThemeContext';

function App() {
  const context = useContext(MyThemeContext);

  return (
    <Router>
      <ThemeProvider theme={context.theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        {routes}
      </ThemeProvider>
    </Router>
  );
}

export default App;
