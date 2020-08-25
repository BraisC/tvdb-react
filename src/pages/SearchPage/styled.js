import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-text);
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  transition: color 0.2s ease;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const NoResult = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const Styled = {
  Wrapper,
  PageTitle,
  NoResult,
};
