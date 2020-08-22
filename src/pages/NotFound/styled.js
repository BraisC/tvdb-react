import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-text);
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  transition: color 0.2s ease;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-top: 4rem;
`;

const ImageWrapper = styled.picture`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

export const Styled = {
  Wrapper,
  PageTitle,
  ImageWrapper,
  Image,
};
