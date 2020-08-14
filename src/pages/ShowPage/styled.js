import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
`;

const ShowInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  /* background-position: right -200px top; */
  padding: 6rem;
  position: relative;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-transparency), 0.5);
  z-index: 1;
`;

const Poster = styled.div`
  width: 50rem;
  z-index: 2;
  padding: 2rem;
  background-color: rgba(var(--color-transparency), 0.8);
`;

const PosterImage = styled.img`
  width: 100%;
`;

const Data = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  width: 50%;
  z-index: 2;
  background-color: rgba(var(--color-transparency), 0.8);
  padding: 6rem;
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
  padding: 3rem 6rem;
`;

const Casting = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  overflow-x: auto;
`;

const CastingItem = styled.div`
  flex: 0 0 10rem;
`;

const CastingImage = styled.img``;

export const Styled = {
  Wrapper,
  ShowInfo,
  Filter,
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
