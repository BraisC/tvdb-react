import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GenresContext } from 'contexts/genresContext';
import { ThemeToggler } from 'components';
import { Styled } from './styled';

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

  const handleClick = () => {
    setIsVisible((v) => !v);
    console.log(isVisible);
  };

  return (
    <li>
      <Styled.SubMenuButton onClick={handleClick}>{value}</Styled.SubMenuButton>
      <Styled.SubMenuWrapper isVisible={isVisible}>
        <Styled.SubMenu>
          {subvalues ? subvalues?.map((s) => <SubMenuItem key={s.name} value={s.name} />) : null}
        </Styled.SubMenu>
      </Styled.SubMenuWrapper>
    </li>
  );
};

const MenuItem = ({ value, route }) => (
  <li>
    <NavLink to={`${process.env.PUBLIC_URL}/shows/${route}`.replace('shows//', '')} exact>
      <span>{`${value}`}</span>
    </NavLink>
  </li>
);

const SideBar = () => {
  const genres = useContext(GenresContext);

  return (
    <Styled.SideBar>
      <Styled.Wrapper>
        <Styled.Logo>TVDB</Styled.Logo>
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
        <ThemeToggler />
      </Styled.Wrapper>
    </Styled.SideBar>
  );
};

export default SideBar;
