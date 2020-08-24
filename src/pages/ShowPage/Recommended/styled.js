import styled from 'styled-components';

const Recommended = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem 3rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 4rem;
`;

export const Styled = {
  Recommended,
  Title,
};
