import React from 'react';
import { darkTheme } from 'utils/theme';
import { useDarkMode } from 'hooks/useDarkMode';

export const MyThemeContext = React.createContext({
  theme: darkTheme,
  themeToggler: () => {},
});

export const MyThemeProvider = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <MyThemeContext.Provider value={{ theme, themeToggler }}>{children}</MyThemeContext.Provider>
  );
};
