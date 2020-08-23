import styled from 'styled-components';

const PeopleInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.mediaQueries.tab} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    padding: 3rem 1rem;
  }
`;

const Profile = styled.figure`
  width: 30rem;
  height: 40rem;
  z-index: 2;
  background-color: var(--color-primary);
  position: relative;
  flex-shrink: 0;

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    width: 20rem;
    height: 30rem;
  }

  @media ${(props) => props.theme.mediaQueries.phone} {
    width: 15rem;
    height: 22.5rem;
  }
`;

const ProfileLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  box-shadow: var(--shadow);
  transition: opacity 1s ease;
  object-fit: cover;
`;

const Data = styled.section`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  width: 40%;
  max-width: 60rem;
  z-index: 2;
  padding: 3rem 6rem;

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    padding: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.tab} {
    width: 100%;
  }

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem;
  }
`;

const DataHeader = styled.div`
  & div {
    display: flex;
    align-items: center;
  }
  & h1 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 0.2rem;
    display: inline-block;
    margin-right: 2rem;
  }

  & p {
    font-size: 1.2rem;
  }
`;

const DataSection = styled.section`
  margin-top: 2rem;
  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

export const Styled = {
  PeopleInfo,
  Profile,
  ProfileLoader,
  ProfileImage,
  Data,
  DataHeader,
  DataSection,
};
