import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ShowPage = () => {
  const { id } = useParams();
  const {
    state: { details },
  } = useLocation();
  const [isLoading, setIsLoading] = useState(!details);

  useEffect(() => {
    if (!details) {
      console.log('request');
      setIsLoading(false);
    }
  }, [details]);

  console.log(isLoading);

  return !isLoading && <div>{details.name}</div>;
};

export default ShowPage;
