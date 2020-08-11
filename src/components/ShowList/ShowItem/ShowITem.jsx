import React, { useState, useRef } from 'react';
import { missingPoster } from 'images';
import { getDetails } from 'api/tmdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { Styled } from './styled';

const generateTitle = (show) => {
  const title = show.name;
  const year = show.first_air_date?.substring(0, 4);

  return year ? `${title} (${year})` : title;
};

const limitTextLength = (title, limit = 18) => {
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

const generateStars = (valoration) => {
  const full = Math.trunc(valoration / 2);
  const decimal = Math.round(((valoration / 2) % 1) * 10);
  const result = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= full || (i === full + 1 && decimal > 6)) {
      result.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === full + 1 && decimal > 2 && decimal < 6) {
      result.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
    } else {
      result.push(<FontAwesomeIcon key={i} icon={faStarEmpty} />);
    }
  }

  return result;
};

const ShowItem = ({ show }) => {
  const [loaded, setLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const imgHeight = useRef();

  const handleHover = async () => {
    if (!details) {
      const res = await getDetails(show.id);
      if (res.error) {
        setIsLoading(false);
      } else {
        setDetails(res.data.data);
        setIsLoading(false);
      }
    }
  };

  const handleContentLoad = (event) => {
    const img = new Image();
    img.src = event.target.src;
    imgHeight.current = img.height;
    setContentLoaded(true);
  };
  console.log(contentLoaded);
  return (
    <Styled.Item loaded={loaded} onMouseEnter={handleHover}>
      <Styled.ItemLink to={`${process.env.PUBLIC_URL}/show/${show.name}`}>
        <Styled.Overlay>
          {isLoading ? (
            'Loading'
          ) : (
            <Styled.Content contentLoaded={details.networks[0]?.logo_path ? contentLoaded : true}>
              <Styled.ContentHeader>
                <h2>{limitTextLength(generateTitle(details))}</h2>
                <span>{details.genres.map((genre) => genre.name).join(', ')}</span>
              </Styled.ContentHeader>
              <Styled.ContentSummary>
                <h3>Summary</h3>
                <p>{limitTextLength(details.overview, 200) || 'No summary'}</p>
              </Styled.ContentSummary>
              <Styled.ContentSeasons>
                {details.seasons?.length} {details.seasons?.length > 1 ? 'Seasons' : 'Season'}
              </Styled.ContentSeasons>
              <Styled.ContentStatus>
                <h3>Status</h3>
                <span>{details.status}</span>
              </Styled.ContentStatus>
              <Styled.ContentFooter>
                <Styled.ContentRating>
                  <h3>Rating</h3>
                  <Styled.ContentStars>{generateStars(details.vote_average)}</Styled.ContentStars>
                </Styled.ContentRating>
                {details.networks[0]?.logo_path ? (
                  <Styled.ContentLogo
                    small={imgHeight.current > 100}
                    onLoad={handleContentLoad}
                    src={`https://image.tmdb.org/t/p/w154${details.networks[0]?.logo_path}`}
                    alt="Network"
                  />
                ) : null}
              </Styled.ContentFooter>
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
