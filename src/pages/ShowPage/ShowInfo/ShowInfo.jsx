import React, { useEffect, useState, useContext } from 'react';
import { ConfigContext } from 'contexts/configContext';
import { useParams } from 'react-router-dom';

import { missingPoster } from 'images';
import { Button, Loader } from 'components';
import utils from 'utils';

import { faExternalLinkAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { getDetails } from 'api/tmdb';
import { Styled } from './styled';

const ShowInfo = ({ handleModal, video }) => {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const config = useContext(ConfigContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getDetails(id);

      if (res.error) {
        setError(true);
      } else {
        setShow(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [id]);

  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  return error ? (
    'Error'
  ) : (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <Styled.ShowInfo
          background={show.backdrop && `${config?.url}/${config?.backdrop.custom}${show.backdrop}`}
        >
          <Styled.Filter />

          <Styled.Poster>
            <Styled.PosterLoader
              style={{ visibility: !posterLoaded ? 'visible' : 'hidden', position: 'absolute' }}
            >
              <Loader />
            </Styled.PosterLoader>
            <Styled.PosterImage
              style={{ opacity: posterLoaded ? '1' : '0' }}
              src={
                show.poster ? `${config?.url}${config?.poster.normal}${show.poster}` : missingPoster
              }
              alt={show.name}
              onLoad={handlePosterLoad}
            />
          </Styled.Poster>
          <Styled.Data>
            <Styled.DataHeader>
              <Styled.DataHeaderLeft>
                <div>
                  <h1>{utils.generateTitle(show)}</h1>
                  {show.rating && <span>{show.rating}</span>}
                </div>
                <p>{show.genres.map((genre) => genre.name).join(', ')}</p>
              </Styled.DataHeaderLeft>
              <Styled.DataHeaderRight>
                {`${show.duration} min / ${utils.getCountryName(show.country)}`}
              </Styled.DataHeaderRight>
            </Styled.DataHeader>
            <Styled.DataSection>
              <h2>Summary</h2>
              <p>{show.overview}</p>
            </Styled.DataSection>
            <Styled.DataSeasons>
              {show.seasons?.length} {show.seasons?.length > 1 ? 'Seasons' : 'Season'}
            </Styled.DataSeasons>
            <Styled.DataSection>
              <h2>Created by</h2>
              <p>{show.creator}</p>
            </Styled.DataSection>
            <Styled.DataSection>
              <h2>Status</h2>
              <p>{show.status}</p>
            </Styled.DataSection>
            <Styled.DataRating>
              <h2>Rating</h2>
              <Styled.DataStars>{utils.generateStars(show.vote_average)}</Styled.DataStars>
              <Styled.DataVotes>
                {`${show.vote_average} with 
              ${show.vote_count} votes`}
              </Styled.DataVotes>
            </Styled.DataRating>

            <Styled.DataFooter>
              <Styled.DataFooterLeft>
                {show.website && (
                  <Styled.DataFooterLink href={show.website}>
                    <Button>
                      <Styled.Icon icon={faExternalLinkAlt} />
                      Website
                    </Button>
                  </Styled.DataFooterLink>
                )}
                {video && (
                  <Styled.DataFooterLink onClick={handleModal}>
                    <Button>
                      <Styled.Icon icon={faVideo} />
                      Trailer
                    </Button>
                  </Styled.DataFooterLink>
                )}
              </Styled.DataFooterLeft>
              <Styled.DataFooterRight>
                {show.network.logo ? (
                  <img
                    src={`${config?.url}/${config?.logo.big}${show.network.logo}`}
                    alt="Network"
                  />
                ) : null}
              </Styled.DataFooterRight>
            </Styled.DataFooter>
          </Styled.Data>
        </Styled.ShowInfo>
      )}
    </>
  );
};

export default ShowInfo;
