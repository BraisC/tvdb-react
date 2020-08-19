import React, { useEffect, useState, useContext } from 'react';
import { getCredits } from 'api/tmdb';
import { ConfigContext } from 'contexts/configContext';
import { useParams } from 'react-router-dom';

import utils from 'utils';
import { profile } from 'images';

import { Styled } from './styled';
import { Carousel } from '../Carousel';

const Casting = () => {
  const { id } = useParams();
  const config = useContext(ConfigContext);

  const [isLoading, setIsLoading] = useState(true);
  const [casting, setCasting] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getCredits(id);

      if (res.error) {
        setError(true);
      } else {
        setCasting(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [id]);

  return error ? (
    'Error'
  ) : (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <Styled.CastingContainer>
          <h1>Casting</h1>
          <Styled.CastingWrapper>
            <Carousel length={casting.cast.length < 5 ? casting.cast.length : 5}>
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
                      />
                    </Styled.CastingItemImageWrapper>
                    <Styled.CastingItemInfo>
                      <h2>{utils.limitTextLength(v.name, 17)}</h2>
                      <span>{utils.limitTextLength(v.character, 17)}</span>
                    </Styled.CastingItemInfo>
                  </Styled.CastingItem>
                </Styled.CastingItemWrapper>
              ))}
            </Carousel>
          </Styled.CastingWrapper>
        </Styled.CastingContainer>
      )}
    </>
  );
};

export default Casting;
