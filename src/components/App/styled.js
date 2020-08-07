import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  transition: background-color 0.2s ease, color 0.2s ease;
  background: var(--color-secondary);
`;

const ContentWrapper = styled.section`
  grid-area: content;
`;

export const Styled = {
  Wrapper,
  ContentWrapper,
};
