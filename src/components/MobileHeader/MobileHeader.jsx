import React, { useState } from 'react';
import { SearchBar } from 'components';
import { AnimatePresence } from 'framer-motion';
import { Styled } from './styled';
import { SideBar } from './SideBar';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((v) => !v);
    // I suppose this is fine as it is not React-created DOM
    document.querySelector('body').classList.toggle('noscroll');
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
      <AnimatePresence>
        {isMenuOpen && <SideBar key="sidebar" closeMenu={handleClick} />}{' '}
        {isMenuOpen && (
          <Styled.Overlay
            key="overlay"
            initial={{ opacity: '0' }}
            animate={{ opacity: '1' }}
            exit={{ opacity: '0' }}
            onClick={handleClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
