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
  z-index: 3;
  width: 50rem;
  height: 75rem;
  position: relative;
  box-shadow: var(--shadow);
  background-color: var(--color-secondary);
`;

const Data = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  max-width: 180rem;
  z-index: 2;
  padding: 6rem;
  padding-left: 0;
  margin-left: 6rem;
  background-color: var(--color-secondary);
`;

export const Styled = {
  ShowInfo,
  Poster,
  Data,
};
