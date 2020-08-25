import styled from 'styled-components';

const ShowListLoader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  gap: 4rem 2rem;
  grid-gap: 4rem 2rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    grid-template-columns: repeat(auto-fit, 18rem);
  }
  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    grid-template-columns: repeat(auto-fit, 15rem);
  }
`;

export const Styled = {
  ShowListLoader,
};
