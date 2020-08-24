import styled from 'styled-components';

const Header = styled.div`
  height: 18rem;
  width: 100%;
  background-color: var(--color-primary);

  @media ${(props) => props.theme.mediaQueries.phone} {
    height: 13rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  flex-grow: 1;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem;
  }
`;

const Items = styled.div`
  width: 100%;
  background-color: var(--color-primary);
`;

export const Styled = {
  Wrapper,
  Header,
  Items,
};
