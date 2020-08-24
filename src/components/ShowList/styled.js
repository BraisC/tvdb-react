import styled from 'styled-components';

const ShowList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 25rem);
  justify-content: space-evenly;
  gap: 4rem 2rem;
  padding: 0 2rem; /* so shadows dont get cut */

  @media ${(props) => props.theme.mediaQueries.phone} {
    grid-template-columns: repeat(auto-fit, 18rem);
  }

  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    grid-template-columns: repeat(auto-fit, 15rem);
  }
`;

export const Styled = {
  ShowList,
};
