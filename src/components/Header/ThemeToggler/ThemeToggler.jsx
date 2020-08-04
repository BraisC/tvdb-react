import React, { useContext } from 'react';
import { MyThemeContext } from 'contexts/myThemeContext';
import { Styled } from './styled';

const ThemeToggler = () => {
  const themeContext = useContext(MyThemeContext);

  const handleClick = () => {
    themeContext.themeToggler();
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Switch Theme
      </button>
      <input type="checkbox" checked={themeContext.theme === 'dark'} name="" id="" />
    </>
  );
};

export default ThemeToggler;
