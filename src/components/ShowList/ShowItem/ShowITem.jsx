import React, { useState } from 'react';
import { missingPoster } from 'images';
import { Styled } from './styled';

const generateTitle = (show) => {
  const title = show.name;
  const year = show.first_air_date?.substring(0, 4);

  return year ? `${title} (${year})` : title;
};

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
      <Styled.Title>{generateTitle(show)}</Styled.Title>
    </Styled.Item>
  );
};

export default ShowItem;
