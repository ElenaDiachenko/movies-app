import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'services/APP';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    try {
      (async function getCast() {
        const data = await fetchCast(movieId);
        setCast(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return <div>{cast[0].name}</div>;
};
