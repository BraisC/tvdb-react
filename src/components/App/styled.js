import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

const ContentWrapper = styled.main`
  grid-area: content;
  background-color: var(--color-secondary);
  transition: background-color 0.2s ease;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-secondary);
`;

export const Styled = {
  Wrapper,
  ContentWrapper,
  Loader,
};
