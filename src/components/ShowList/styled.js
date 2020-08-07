import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-between;
  gap: 4rem;
  overflow: hidden;
  padding: 0 2rem; /* so shadows dont get cut */
`;

export const Styled = {
  Wrapper,
};
