import styled from 'styled-components';

const SearchBar = styled.form`
  width: 40rem;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text);
  transition: background-color 0.2s ease, color 0.2s ease;
  padding-left: 5rem;
  font-family: Montserrat;

  &:focus::placeholder {
    opacity: 0;
  }

  &::placeholder {
    opacity: 35%;
    text-transform: uppercase;
    font-family: Montserrat;
    transition: 0.2s ease;
  }
`;

const SearchIcon = styled.label`
  color: var(--color-red);
  margin-right: -3.5rem;
  margin-top: 3px;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 999;
`;

export const Styled = {
  SearchBar,
  SearchInput,
  SearchIcon,
};
