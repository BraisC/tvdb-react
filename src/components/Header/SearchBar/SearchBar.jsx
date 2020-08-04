import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Styled } from './styled';

const SearchBar = () => (
  <Styled.SearchBar action="">
    <Styled.SearchIcon>
      <FontAwesomeIcon icon={faSearch} />
    </Styled.SearchIcon>
    <Styled.SearchInput placeholder="find tv shows" type="text" />
  </Styled.SearchBar>
);

export default SearchBar;
