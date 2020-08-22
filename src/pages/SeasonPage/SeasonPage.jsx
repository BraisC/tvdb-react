import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSeasonDetails } from 'api/tmdb';
import { faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { missingPoster } from 'images';
import { ConfigContext } from 'contexts/configContext';
import utils from 'utils';
import { Styled } from './styled';

const SeasonPage = () => {
  const config = useContext(ConfigContext);
  const { id, number } = useParams();
  const [season, setSeason] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();
  useEffect(() => {
    async function getData() {
      const res = await getSeasonDetails(id, number);
      if (res.error) {
        setError(true);
      } else {
        setSeason(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [id, number]);

  const handleChange = (event) => {
    history.push(`/show/${id}/season/${event.target.value}`);
  };
  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  console.log(season);

  return (
    <>
      <Styled.SeasonHeader>
        <Styled.SeasonHeaderLeft>
          <Styled.Poster>
            <Styled.PosterImage
              src={
                season?.poster
                  ? `${config?.url}${config?.poster.normal}${season?.poster}`
                  : missingPoster
              }
              alt={season?.name}
            />
          </Styled.Poster>
          <Styled.TitleWrapper>
            <Styled.Title>{season?.name}</Styled.Title>
            <Styled.BackLink to={`/show/${id}`}>
              <Styled.Icon icon={faChevronLeft} />
              Go Back to Show
            </Styled.BackLink>
          </Styled.TitleWrapper>
        </Styled.SeasonHeaderLeft>
        <Styled.SeasonHeaderRight>
          <Styled.Title as="span">Select another season</Styled.Title>
          <Styled.SelectWrapper>
            <Styled.Select onChange={handleChange} name="seasons" id="seasons">
              {season?.show.seasons.map((s) => (
                <option key={s.id} value={s.season_number}>
                  {s.name}
                </option>
              ))}
            </Styled.Select>
            <Styled.Icon icon={faChevronDown} />
          </Styled.SelectWrapper>
        </Styled.SeasonHeaderRight>
      </Styled.SeasonHeader>
      <Styled.Wrapper>
        <Styled.Episodes>
          {season?.episodes.map((e) => (
            <Styled.EpisodeWrapper key={e.id}>
              <Styled.EpisodePoster>
                <Styled.EpisodePosterImage
                  src={
                    e?.still_path
                      ? `${config?.url}${config?.still.normal}${e?.still_path}`
                      : missingPoster
                  }
                  missingPoster={!e?.still_path}
                />
              </Styled.EpisodePoster>
              <Styled.EpisodeInfo>
                <Styled.InfoHeader>
                  <Styled.InfoTitle>
                    {e.episode_number} - {e.name}
                  </Styled.InfoTitle>
                  <Styled.InfoStars>{utils.generateStars(e.vote_average)}</Styled.InfoStars>
                </Styled.InfoHeader>
                <Styled.Info>
                  <Styled.InfoOverview>{e.overview}</Styled.InfoOverview>
                </Styled.Info>
              </Styled.EpisodeInfo>
            </Styled.EpisodeWrapper>
          ))}
        </Styled.Episodes>
        <Styled.GoTop onClick={handleTop}>
          {' '}
          <Styled.Icon icon={faChevronUp} />
          Go to the top
        </Styled.GoTop>
      </Styled.Wrapper>
    </>
  );
};

export default SeasonPage;
