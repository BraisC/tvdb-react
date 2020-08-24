import styled from 'styled-components';

const Appearances = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem;

  & > h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem;
  }
`;

export const Styled = {
  Appearances,
};
