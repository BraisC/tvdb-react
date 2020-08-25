import React, { useEffect, useState, useContext } from 'react';
import { getCredits } from 'api/tmdb';
import { ConfigContext } from 'contexts/configContext';
import { useParams } from 'react-router-dom';

import utils from 'utils';
import { profile } from 'images';

import { Error } from 'components';
import { Styled } from './styled';
import { Carousel } from '../Carousel';
import { CastingLoader } from './Loader';

const Casting = ({ parentLoading }) => {
  const { id } = useParams();
  const config = useContext(ConfigContext);

  const [isLoading, setIsLoading] = useState(true);
  const [casting, setCasting] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getCredits(id);

      if (res.error) {
        setError(res.error);
      } else {
        setCasting(res.data);
      }
      setIsLoading(false);
    }
    !parentLoading && getData();
    return () => setIsLoading(true);
  }, [id, parentLoading]);

  return error ? (
    <Error message={error} />
  ) : (
    <>
      <Styled.CastingContainer>
        <h1>Casting</h1>
        {isLoading ? (
          <CastingLoader />
        ) : (
          <>
            {casting.cast.length ? (
              <Styled.CastingWrapper>
                <Carousel
                  length={casting.cast.length < 5 ? casting.cast.length : 5}
                  responsive={[
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: casting.cast.length < 4 ? casting.cast.length : 4,
                      },
                    },
                    {
                      breakpoint: 750,
                      settings: {
                        slidesToShow: casting.cast.length < 3 ? casting.cast.length : 3,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: casting.cast.length < 2 ? casting.cast.length : 2,
                      },
                    },
                  ]}
                >
                  {casting.cast.map((v) => (
                    <Styled.CastingItemWrapper key={v.id + v.character}>
                      <Styled.CastingItem
                        to={`${process.env.PUBLIC_URL}/people/${v.id}`}
                        title={v.name}
                      >
                        <Styled.CastingItemImageWrapper>
                          <Styled.CastingItemImage
                            src={
                              v.profile_path
                                ? `${config?.url}${config?.profile.normal}${v.profile_path}`
                                : profile
                            }
                            alt={v.name}
                            missingImage={!v.profile_path}
                          />
                        </Styled.CastingItemImageWrapper>
                        <Styled.CastingItemInfo>
                          <h2>{utils.limitTextLength(v.name, 14)}</h2>
                          <span>{utils.limitTextLength(v.character, 15)}</span>
                        </Styled.CastingItemInfo>
                      </Styled.CastingItem>
                    </Styled.CastingItemWrapper>
                  ))}
                </Carousel>
              </Styled.CastingWrapper>
            ) : (
              <Styled.NoResult>No casting found for this show</Styled.NoResult>
            )}
          </>
        )}
      </Styled.CastingContainer>
    </>
  );
};

export default Casting;
