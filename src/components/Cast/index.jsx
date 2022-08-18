import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchCastsData } from 'helpers';
import { CastItem } from './CastItem';
import styles from './Cast.module.css';

export default function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCastsData(id);
      setCasts(data.slice(0, 24));
    };
    fetchData();
  }, [id]);


  return (
    <>
      {casts.length ? (
        <ul className={styles.list}>
          {casts && casts.map(cast => <CastItem key={cast.id} cast={cast} />)}
        </ul>
      ) : (
        <p>
          Not found
        </p>
      )}
    </>
  );
}
