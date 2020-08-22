import styled from 'styled-components';

const PeopleInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const Profile = styled.div`
  background-color: var(--color-primary);
  height: 40rem;
  width: 30rem;
`;

const Data = styled.section`
  width: 40%;
  max-width: 60rem;
  z-index: 2;
  padding: 4rem;
  background-color: var(--color-primary);
  align-self: stretch;
`;

export const Styled = {
  PeopleInfo,
  Profile,
  Data,
};
