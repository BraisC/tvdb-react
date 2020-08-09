import React from 'react';
import { darkTheme } from 'styles/theme';
import { useThemeSwitch } from 'hooks/useThemeSwitch';

export const MyThemeContext = React.createContext({
  theme: darkTheme,
  themeToggler: () => {},
});

export const MyThemeProvider = ({ children }) => {
  const [theme, themeToggler] = useThemeSwitch();

  return (
    <MyThemeContext.Provider value={{ theme, themeToggler }}>{children}</MyThemeContext.Provider>
  );
};
