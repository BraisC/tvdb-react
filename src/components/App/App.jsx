import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import createRoutes from 'routes';
import { Header, Footer } from 'components';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { MyThemeContext } from 'contexts/myThemeContext';
import { GenresProvider } from 'contexts/genresContext';
import { ConfigProvider } from 'contexts/configContext';

import { Styled } from './styled';

function App() {
  const context = useContext(MyThemeContext);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const changeMobile = () => {
      window.matchMedia('(max-width: 75em)').matches ? setIsMobile(true) : setIsMobile(false);
    };
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  console.log(isMobile);

  return (
    <Router>
      <ThemeProvider theme={context.theme === 'dark' ? darkTheme : lightTheme}>
        <ConfigProvider>
          <GenresProvider>
            <GlobalStyles />
            <Styled.Wrapper>
              {isMobile ? 'holi' : <Header />}
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
