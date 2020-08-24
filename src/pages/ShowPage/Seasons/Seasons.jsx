import React, { useState, useContext } from 'react';
import { ConfigContext } from 'contexts/configContext';

import utils from 'utils';
import { missingPoster } from 'images';
import { Loader } from 'components';

import { Styled } from './styled';
import { Carousel } from '../Carousel';
import { SeasonsLoader } from './Loader';

const Seasons = ({ isLoading, show }) => {
  const config = useContext(ConfigContext);
  const [posterLoaded, setPosterLoaded] = useState(false);

  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  return (
    <Styled.Seasons>
      <h1>Seasons</h1>
      {isLoading ? (
        <SeasonsLoader />
      ) : (
        <>
          {show.seasons.length ? (
            <Styled.SeasonsWrapper>
              <Carousel
                length={show.seasons.length < 5 ? show.seasons.length : 5}
                responsive={[
                  {
                    breakpoint: 1920,
                    settings: {
                      slidesToShow: show.seasons.length < 3 ? show.seasons.length : 3,
                    },
                  },
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: show.seasons.length < 2 ? show.seasons.length : 2,
                    },
                  },
                  {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                {show.seasons.map((v) => (
                  <Styled.SeasonsItemWrapper key={v.id}>
                    <Styled.SeasonsItem
                      to={`${process.env.PUBLIC_URL}/show/${show.id}/season/${v.season_number}`}
                      title={v.name}
                    >
                      <Styled.SeasonsItemContent>
                        <Styled.SeasonsItemImageWrapper>
                          {!posterLoaded && (
                            <Styled.SeasonsItemImageLoader>
                              <Loader />
                            </Styled.SeasonsItemImageLoader>
                          )}

                          <Styled.SeasonsItemImage
                            src={
                              v.poster_path
                                ? `${config?.url}${config?.poster.smaller}${v.poster_path}`
                                : missingPoster
                            }
                            alt={v.name}
                            onLoad={handlePosterLoad}
                            missingPoster={!v.poster_path}
                            style={{ opacity: posterLoaded ? '1' : '0' }}
                          />
                        </Styled.SeasonsItemImageWrapper>
                        <Styled.SeasonsItemInfo>
                          <h2>{utils.limitTextLength(v.name, 17)}</h2>
                          <span>
                            {`${v.air_date ? `${v.air_date.substring(0, 4)} - ` : ''} ${
                              v.episode_count
                            } episodes`}
                          </span>
                          <p>{utils.limitTextLength(v.overview, 100)}</p>
                        </Styled.SeasonsItemInfo>
                      </Styled.SeasonsItemContent>
                    </Styled.SeasonsItem>
                  </Styled.SeasonsItemWrapper>
                ))}
              </Carousel>
            </Styled.SeasonsWrapper>
          ) : (
            'No seasons found for this show'
          )}
        </>
      )}
    </Styled.Seasons>
  );
};

export default Seasons;
