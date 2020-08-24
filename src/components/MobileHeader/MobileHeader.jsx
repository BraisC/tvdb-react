import React, { useState } from 'react';
import { SearchBar } from 'components';
import { Styled } from './styled';
import { SideBar } from './SideBar';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((v) => !v);
  };

  return (
    <>
      <Styled.MobileHeader>
        <SearchBar />
        <Styled.Hamburger onClick={handleClick}>
          <Styled.HamburgerLine />
          <Styled.HamburgerLine />
          <Styled.HamburgerLine />
        </Styled.Hamburger>
      </Styled.MobileHeader>
      {isMenuOpen && (
        <>
          <SideBar closeMenu={handleClick} />
          <Styled.Overlay onClick={handleClick} />
        </>
      )}
    </>
  );
};

export default MobileHeader;
