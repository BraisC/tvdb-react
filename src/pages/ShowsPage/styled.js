import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-text);
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

export const Styled = {
  Wrapper,
  PageTitle,
};
