import styled from 'styled-components';

const ShowListLoader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-between;
  gap: 4rem;
  padding: 0 2rem; /* so shadows dont get cut */
`;

export const Styled = {
  ShowListLoader,
};
