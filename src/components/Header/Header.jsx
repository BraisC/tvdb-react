import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GenresContext } from 'contexts/genresContext';
import { Styled } from './styled';
import { SearchBar } from './SearchBar';
import { ThemeToggler } from './ThemeToggler';

const MenuOptions = [
  { name: 'popular', route: '/' },
  { name: 'top', route: 'top rated' },
  { name: 'on air', route: 'on the air' },
  { name: 'today', route: 'airing today' },
  { name: 'genre' },
];

const SubMenuItem = ({ value }) => (
  <li>
    <NavLink to={`${process.env.PUBLIC_URL}/genre/${value}`} exact>
      <span>{`${value}`}</span>
    </NavLink>
  </li>
);

const SubMenu = ({ value, subvalues }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(delayHandler);
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setDelayHandler(setTimeout(() => setIsVisible(false), 300));
  };

  return (
    <Styled.SubMenuWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Styled.SubMenuButton>{value}</Styled.SubMenuButton>
      <Styled.SubMenu isVisible={isVisible}>
        {subvalues ? subvalues?.map((s) => <SubMenuItem key={s.name} value={s.name} />) : null}
      </Styled.SubMenu>
    </Styled.SubMenuWrapper>
  );
};

const MenuItem = ({ value, route }) => (
  <li>
    <NavLink to={`${process.env.PUBLIC_URL}/shows/${route}`.replace('shows//', '')} exact>
      <span>{`${value}`}</span>
    </NavLink>
  </li>
);

const Menu = () => {
  const genres = useContext(GenresContext);

  return (
    <Styled.Nav>
      <Styled.Menu>
        {MenuOptions.map((val) =>
          val.route ? (
            <MenuItem key={val.name} value={val.name} route={val.route} />
          ) : (
            <SubMenu key={val.name} value={val.name} subvalues={genres} />
          )
        )}
      </Styled.Menu>
    </Styled.Nav>
  );
};

const Header = () => (
  <Styled.Header>
    <Styled.Logo>TVDB</Styled.Logo>
    <Menu />
    <SearchBar />
    <ThemeToggler />
  </Styled.Header>
);

export default Header;
