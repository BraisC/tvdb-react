import React, { useState } from 'react';
import { missingPoster } from 'images';
import { Styled } from './styled';

const ShowItem = ({ show }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Styled.Item loaded={loaded}>
      <Styled.ItemLink to={`${process.env.PUBLIC_URL}/show/${show.name}`}>
        <Styled.Image
          loading="lazy"
          onLoad={() => setLoaded(true)}
          src={
            show.poster_path ? `https://image.tmdb.org/t/p/w342${show.poster_path}` : missingPoster
          }
          alt={show.name}
          className={show.poster_path ? null : 'missing-poster'}
        />
      </Styled.ItemLink>
      <Styled.Title>{`${show.name} (${show.first_air_date.substring(0, 4)})`}</Styled.Title>
    </Styled.Item>
  );
};

export default ShowItem;
