import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import createRoutes from 'routes';
import { Header, Footer } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { MyThemeContext } from 'contexts/myThemeContext';
import { GenresProvider } from 'contexts/genresContext';
import { Styled } from './styled';

function App() {
  const context = useContext(MyThemeContext);

  return (
    <Router>
      <ThemeProvider theme={context.theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Styled.Wrapper>
          <GenresProvider>
            <Header />
          </GenresProvider>
          <Styled.ContentWrapper>{createRoutes()}</Styled.ContentWrapper>
          <Footer />
        </Styled.Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
