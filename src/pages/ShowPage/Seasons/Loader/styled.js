import styled from 'styled-components';

const Seasons = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem;
  background-color: var(--color-primary);
  height: 22.5rem;
  margin: 2rem 0;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem;
  }
`;

export const Styled = {
  Seasons,
};
