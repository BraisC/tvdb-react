import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GenresContext } from 'contexts/genresContext';
import { ThemeToggler } from 'components';

import { motion } from 'framer-motion';
import { Styled } from './styled';

const MenuOptions = [
  { name: 'popular', route: '/' },
  { name: 'top', route: 'top rated' },
  { name: 'on air', route: 'on the air' },
  { name: 'today', route: 'airing today' },
  { name: 'genre' },
];

const sidebarVariants = {
  close: {
    x: '100%',
    /*  transition: {
        when: 'afterChildren',
      }, */
  },
  open: {
    x: '0',
    transition: {
      // when: 'beforeChildren',
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};
// These variants execute when the father (sidebar) changes its animation state
const itemVariants = {
  close: { x: '140px', transition: { duration: 0.5 } },
  open: { x: '0', transition: { duration: 0.3 } },
};

const SubMenuItem = ({ value, closeMenu }) => (
  <li>
    <NavLink onClick={closeMenu} to={`${process.env.PUBLIC_URL}/genre/${value}`} exact>
      <span>{`${value}`}</span>
    </NavLink>
  </li>
);

const SubMenu = ({ value, subvalues, closeMenu }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((v) => !v);
  };

  return (
    <motion.li key={value} variants={itemVariants}>
      <Styled.SubMenuButton onClick={handleClick}>{value}</Styled.SubMenuButton>
      <Styled.SubMenuWrapper isVisible={isVisible}>
        <Styled.SubMenu>
          {subvalues
            ? subvalues?.map((s) => (
                <SubMenuItem closeMenu={closeMenu} key={s.name} value={s.name} />
              ))
            : null}
        </Styled.SubMenu>
      </Styled.SubMenuWrapper>
    </motion.li>
  );
};

const MenuItem = ({ value, route, closeMenu }) => (
  <motion.li key={value} variants={itemVariants}>
    <NavLink
      onClick={closeMenu}
      to={`${process.env.PUBLIC_URL}/shows/${route}`.replace('shows//', '')}
      exact
    >
      <span>{`${value}`}</span>
    </NavLink>
  </motion.li>
);

const SideBar = ({ closeMenu }) => {
  const genres = useContext(GenresContext);

  return (
    <Styled.SideBar initial="close" animate="open" exit="close" variants={sidebarVariants}>
      <Styled.Wrapper>
        <Styled.Logo>TVDB</Styled.Logo>
        <Styled.Nav>
          <Styled.Menu>
            {MenuOptions.map((val) =>
              val.route ? (
                <MenuItem closeMenu={closeMenu} key={val.name} value={val.name} route={val.route} />
              ) : (
                <SubMenu closeMenu={closeMenu} key={val.name} value={val.name} subvalues={genres} />
              )
            )}
          </Styled.Menu>
        </Styled.Nav>
        <ThemeToggler />
      </Styled.Wrapper>
    </Styled.SideBar>
  );
};

export default SideBar;
