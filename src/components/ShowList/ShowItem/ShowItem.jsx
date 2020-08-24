import React, { useState, useRef, useEffect, useContext } from 'react';
import { missingPoster } from 'images';
import { getDetails } from 'api/tmdb';
import utils from 'utils';
import { Loader } from 'components';
import { ConfigContext } from 'contexts/configContext';
import { Styled } from './styled';
import { ContentLoader } from './ContentLoader';

const ShowItem = ({ show }) => {
  const config = useContext(ConfigContext);

  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const imgHeight = useRef();
  const isUnMounted = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const changeMobile = () => {
      window.matchMedia('(max-width: 37.5em)').matches ? setIsMobile(true) : setIsMobile(false);
    };
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  const handleHover = async () => {
    if (!details && !isMobile) {
      const res = await getDetails(show.id);
      if (res.error) {
        !isUnMounted.current && setIsLoading(false);
      } else {
        !isUnMounted.current && setDetails(res.data);
        !isUnMounted.current && setIsLoading(false);
      }
    }
  };

  const handleLogoLoad = (event) => {
    const img = new Image();
    img.src = event.target.src;
    imgHeight.current = img.height;
    !isUnMounted.current && setLogoLoaded(true);
  };

  const handlePosterLoad = () => {
    !isUnMounted.current && setPosterLoaded(true);
  };

  useEffect(
    () => () => {
      isUnMounted.current = true;
    },
    []
  );

  return (
    <Styled.ShowItem onMouseEnter={handleHover}>
      <Styled.ShowItemLink
        to={{
          pathname: `${process.env.PUBLIC_URL}/show/${show.id}`,
          state: {
            details,
          },
        }}
        $isMobile={isMobile}
      >
        {!isMobile && (
          <Styled.Overlay>
            {isLoading ? (
              <ContentLoader />
            ) : (
              <Styled.Content
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Styled.ContentHeader>
                  <h1>{utils.limitTextLength(utils.generateTitle(details))}</h1>
                  <span>{details.genres.map((genre) => genre.name).join(', ')}</span>
                </Styled.ContentHeader>
                <Styled.ContentSection>
                  <h2>Summary</h2>
                  <p>{utils.limitTextLength(details.overview, 200) || 'No summary'}</p>
                </Styled.ContentSection>
                <Styled.ContentSection>
                  <h2>
                    {details.seasons?.length} {details.seasons?.length > 1 ? 'Seasons' : 'Season'}
                  </h2>
                </Styled.ContentSection>
                <Styled.ContentSection>
                  <h2>Status</h2>
                  <span>{details.status}</span>
                </Styled.ContentSection>
                <Styled.ContentFooter>
                  <Styled.ContentSection>
                    <h2>Rating</h2>
                    <Styled.ContentStars>
                      {utils.generateStars(details.vote_average)}
                    </Styled.ContentStars>
                  </Styled.ContentSection>
                  {details.network?.logo ? (
                    <Styled.ContentLogo
                      small={imgHeight.current > 80}
                      onLoad={handleLogoLoad}
                      logoLoaded={logoLoaded}
                      src={`${config?.url}${config?.logo.big}${details.network?.logo}`}
                      alt="Network"
                    />
                  ) : null}
                </Styled.ContentFooter>
              </Styled.Content>
            )}
          </Styled.Overlay>
        )}

        <Styled.Poster>
          {!posterLoaded && (
            <Styled.PosterLoader>
              <Loader />
            </Styled.PosterLoader>
          )}
          <Styled.PosterImage
            style={{ opacity: posterLoaded ? '1' : '0' }}
            loading="lazy"
            onLoad={handlePosterLoad}
            srcSet={`
            ${
              show.poster ? `${config?.url}${config?.poster.small}${show.poster}` : missingPoster
            } 340w, 
            ${
              show.poster ? `${config?.url}${config?.poster.smaller}${show.poster}` : missingPoster
            } 150w,
            `}
            sizes="(max-width: 600px) 150px,
            340px"
            src={
              show.poster
                ? `${config?.url}${config?.poster.small}${show.poster}${show.poster}`
                : missingPoster
            }
            missingPoster={!show.poster}
            alt={show.name}
          />
        </Styled.Poster>
      </Styled.ShowItemLink>
      <Styled.Title>{utils.generateTitle(show)}</Styled.Title>
    </Styled.ShowItem>
  );
};

export default ShowItem;
