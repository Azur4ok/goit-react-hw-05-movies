import React from 'react';

import fetchData from '../../helpers/index';
import { MoviesList } from '../../components/MoviesList';
import styles from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchData();
        setMovies(data);
      } catch (error) {
        console.log(error);
        alert('Failed to retrieve a data');
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};
