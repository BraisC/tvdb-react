import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { Styled } from './styled';

const SearchBar = () => {
  const history = useHistory();
  const input = useRef();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      history.push(`/search/${input.current.value}`);
      setValue('');
      input.current.blur();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Styled.SearchBar onSubmit={handleSubmit}>
      <Styled.SearchIcon onClick={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} />
      </Styled.SearchIcon>
      <Styled.SearchInput
        onChange={handleChange}
        ref={input}
        value={value}
        placeholder="find tv shows"
        type="text"
      />
    </Styled.SearchBar>
  );
};

export default SearchBar;
