import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { ConfigContext } from 'contexts/configContext';
import { getShowsPage } from 'api/tmdb';
import { faExternalLinkAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { missingPoster, profile } from 'images';

import queryString from 'query-string';
import utils from 'utils';

import { ShowList, Pagination, Button, Loader, Modal } from 'components';
import ModalVideo from 'react-modal-video';
import { Styled } from './styled';
import { Carousel } from './Carousel';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ShowPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState();
  const [error, setError] = useState(false);

  const config = useContext(ConfigContext);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShowsPage(params.page, id);

      if (res.error) {
        setError(true);
      } else {
        setShow(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [history, id, params.page]);

  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };
  console.log(show);
  return error ? (
    'Error'
  ) : (
    <Styled.Wrapper>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          {show.video && (
            <ModalVideo
              channel="youtube"
              isOpen={isModalOpen}
              videoId={show.video}
              onClose={hideModal}
            />
          )}
          <Styled.ShowInfo
            background={
              show.backdrop && `${config?.url}/${config?.backdrop.custom}${show.backdrop}`
            }
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
                  show.poster ? `${config?.url}/${config?.poster.big}${show.poster}` : missingPoster
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
                  {show.video && (
                    <Styled.DataFooterLink onClick={showModal}>
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

          <Styled.CastingContainer>
            <h1>Casting</h1>
            <Styled.CastingWrapper>
              <Carousel length={show.cast.length < 5 ? show.cast.length : 5}>
                {show.cast.map((v) => (
                  <Styled.CastingItem
                    key={v.id + v.character}
                    to={`${process.env.PUBLIC_URL}/casting/${v.id}`}
                    title={v.name}
                  >
                    <Styled.CastingItemContent>
                      <Styled.CastingItemImageWrapper>
                        <Styled.CastingItemImage
                          src={
                            v.profile_path
                              ? `${config?.url}/${config?.profile.normal}${v.profile_path}`
                              : profile
                          }
                          alt={v.name}
                        />
                      </Styled.CastingItemImageWrapper>
                      <Styled.CastingItemInfo>
                        <h2>{utils.limitTextLength(v.name, 17)}</h2>
                        <span>{utils.limitTextLength(v.character, 17)}</span>
                      </Styled.CastingItemInfo>
                    </Styled.CastingItemContent>
                  </Styled.CastingItem>
                ))}
              </Carousel>
            </Styled.CastingWrapper>
          </Styled.CastingContainer>

          <Styled.SeasonsContainer>
            <h1>Seasons</h1>
            <Styled.SeasonsWrapper>
              <Carousel
                length={show.seasons.length < 5 ? show.seasons.length : 5}
                responsive={[
                  {
                    breakpoint: 1600,
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                ]}
              >
                {show.seasons.map((v) => (
                  <Styled.SeasonsItem
                    key={v.id}
                    to={`${process.env.PUBLIC_URL}/tv/${v.id}/season/${v.season_number}`}
                    title={v.name}
                  >
                    <Styled.SeasonsItemContent>
                      <Styled.SeasonsItemImageWrapper>
                        <Styled.SeasonsItemImage
                          src={
                            v.poster_path
                              ? `${config?.url}/${config?.poster.normal}${v.poster_path}`
                              : missingPoster
                          }
                          alt={v.name}
                        />
                      </Styled.SeasonsItemImageWrapper>
                      <Styled.SeasonsItemInfo>
                        <h2>{utils.limitTextLength(v.name, 17)}</h2>
                        <span>
                          {`${v.air_date ? `${v.air_date.substring(0, 4)} - ` : ''} ${
                            v.episode_count
                          } episodes`}
                        </span>
                        <p>{utils.limitTextLength(v.overview, 200)}</p>
                      </Styled.SeasonsItemInfo>
                    </Styled.SeasonsItemContent>
                  </Styled.SeasonsItem>
                ))}
              </Carousel>
            </Styled.SeasonsWrapper>
          </Styled.SeasonsContainer>

          <Styled.RecommendedContainer>
            <h1>Recommended</h1>
            {show.recommendations.results.length ? (
              <>
                <ShowList
                  shows={show.recommendations.results}
                  few={show.recommendations.total_results < 5 ? 'few' : null}
                />
                <Pagination
                  currentPage={parseInt(params.page ?? '1')}
                  totalPages={show.recommendations.total_pages}
                  size={7}
                />
              </>
            ) : (
              'No recommendations for this show'
            )}
          </Styled.RecommendedContainer>
        </>
      )}
    </Styled.Wrapper>
  );
};

export default ShowPage;
