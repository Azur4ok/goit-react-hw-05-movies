import React from 'react';
import PropTypes from 'prop-types';

import { MoviesListItem } from './MoviesListItem';
import styles from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {movies &&
          movies.map(movie => (
            <MoviesListItem
              key={movie.id}
              movie={movie}
              className={styles.item}
            />
          ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_url: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ),
};
