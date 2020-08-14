import styled from 'styled-components';

const ShowInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const Poster = styled.div`
  width: 50rem;
`;

const PosterImage = styled.img`
  width: 100%;
`;

const Data = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 50%;
`;

const ContentRating = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
`;

const ContentStars = styled.div`
  color: var(--color-red);

  & span {
    margin-right: 2px;
  }
`;

const CastingContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const Casting = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const CastingItem = styled.div`
  width: 10rem;
`;

const CastingImage = styled.img`
  width: 100%;
`;

export const Styled = {
  ShowInfo,
  Poster,
  PosterImage,
  Data,
  ContentStars,
  ContentRating,
  Casting,
  CastingImage,
  CastingItem,
  CastingContainer,
};
