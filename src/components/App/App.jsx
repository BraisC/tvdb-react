import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import createRoutes from 'routes';
import { Header, Footer, MobileHeader } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { MyThemeContext } from 'contexts/myThemeContext';
import { GenresProvider } from 'contexts/genresContext';
import { ConfigContext } from 'contexts/configContext';

import { Styled } from './styled';

function App() {
  const context = useContext(MyThemeContext);
  const config = useContext(ConfigContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 75em)');
    const changeMobile = () => {
      mediaQuery.matches ? setIsMobile(true) : setIsMobile(false);
    };
    mediaQuery.addEventListener('change', changeMobile);
    changeMobile();
    return () => mediaQuery.removeEventListener(changeMobile);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={context.theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        {config.isLoading ? (
          <Styled.Loader />
        ) : (
          <GenresProvider>
            <Styled.Wrapper>
              {isMobile ? <MobileHeader /> : <Header />}
              <Styled.ContentWrapper>{createRoutes()}</Styled.ContentWrapper>
              <Footer />
            </Styled.Wrapper>
          </GenresProvider>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default App;
