import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ConfigContext } from 'contexts/configContext';
import { getShowsPage } from 'api/tmdb';

import { missingPoster } from 'images';

import queryString from 'query-string';
import utils from 'utils';

import { ShowList, Pagination } from 'components';
import ModalVideo from 'react-modal-video';
import { Styled } from './styled';
import { Carousel } from './Carousel';
import { ShowInfo } from './ShowInfo';
import { Casting } from './Casting';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ShowPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

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
  }, [id, params.page]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

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

          <ShowInfo video={show.video} handleModal={showModal} />

          <Casting />

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
                  <Styled.SeasonsItemWrapper key={v.id}>
                    <Styled.SeasonsItem
                      to={`${process.env.PUBLIC_URL}/show/${show.id}/season/${v.season_number}`}
                      title={v.name}
                    >
                      <Styled.SeasonsItemContent>
                        <Styled.SeasonsItemImageWrapper>
                          <Styled.SeasonsItemImage
                            src={
                              v.poster_path
                                ? `${config?.url}${config?.poster.smaller}${v.poster_path}`
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
                  </Styled.SeasonsItemWrapper>
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
