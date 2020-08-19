import styled from 'styled-components';

const ShowInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  position: relative;
  background-color: var(--color-primary);
`;

const Poster = styled.div`
  position: relative;
  background-color: var(--color-primary);
  height: 75rem;
`;

export const Styled = {
  ShowInfo,
  Poster,
};
