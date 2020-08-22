import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import createRoutes from 'routes';
import { Header, Footer } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { MyThemeContext } from 'contexts/myThemeContext';
import { GenresProvider } from 'contexts/genresContext';
import { ConfigProvider } from 'contexts/configContext';
import queryString from 'query-string';
import { Styled } from './styled';

function ScrollToTop({ history, location }) {
  const params = queryString.parse(location.pathname);
  console.log(params);
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

const Scroll = withRouter(ScrollToTop);

function App() {
  const context = useContext(MyThemeContext);

  return (
    <Router>
      <ThemeProvider theme={context.theme === 'dark' ? darkTheme : lightTheme}>
        <ConfigProvider>
          <GenresProvider>
            <GlobalStyles />
            <Styled.Wrapper>
              <Header />
              <Styled.ContentWrapper>{createRoutes()}</Styled.ContentWrapper>
              <Footer />
            </Styled.Wrapper>
          </GenresProvider>
        </ConfigProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
