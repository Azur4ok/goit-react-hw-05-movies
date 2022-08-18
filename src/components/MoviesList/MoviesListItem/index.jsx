import React from 'react';
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

import styles from './MoviesListItem.module.css';

export const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  const { id, poster_url, vote_count, vote_average, title } = movie;
  return (
    <li className={styles.li}>
      <Link to={`/movies/${id}`} state={{ from: `${location.pathname}${location?.search}` }}>
        <h4>{title}</h4>
        <img
        className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_url}`}
          alt="poster"
        />
      </Link>
      <p><span>vote average: {vote_average}</span></p>
      <p><span>vote count: {vote_count}</span></p>
    </li>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_url: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
  })
}

