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
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

export const Styled = {
  Wrapper,
  ContentWrapper,
};
