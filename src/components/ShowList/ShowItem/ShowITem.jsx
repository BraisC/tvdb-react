import React, { useState } from 'react';
import { missingPoster } from 'images';
import { getDetails } from 'api/tmdb';
import { Styled } from './styled';

const generateTitle = (show) => {
  const title = show.name;
  const year = show.first_air_date?.substring(0, 4);

  return year ? `${title} (${year})` : title;
};

const limitTitle = (title, limit = 18) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((accumulator, currentValue) => {
      if (accumulator + currentValue.length < limit) {
        newTitle.push(currentValue);
      }
      return accumulator + currentValue.length;
    }, 0);

    if (newTitle.join(' ').length === title.length) {
      return newTitle.join(' ');
    }
    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

const ShowItem = ({ show }) => {
  const [loaded, setLoaded] = useState(false);
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log('item');

  const handleHover = async () => {
    const res = await getDetails(show.id);
    if (res.error) {
      setIsLoading(false);
    } else {
      setDetails(res.data.data);
      setIsLoading(false);
    }
  };

  return (
    <Styled.Item loaded={loaded} onMouseEnter={handleHover}>
      <Styled.ItemLink to={`${process.env.PUBLIC_URL}/show/${show.name}`}>
        <Styled.Overlay>
          {isLoading ? (
            'Loading'
          ) : (
            <Styled.Content>
              <h2>{limitTitle(generateTitle(details))}</h2>
              <h3>{details.genres.map((genre) => genre.name).join(', ')}</h3>
            </Styled.Content>
          )}
        </Styled.Overlay>
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
