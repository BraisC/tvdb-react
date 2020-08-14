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

const ContentWrapper = styled.section`
  grid-area: content;
  background-color: var(--color-secondary);
  transition: background-color 0.2s ease;
`;

export const Styled = {
  Wrapper,
  ContentWrapper,
};
