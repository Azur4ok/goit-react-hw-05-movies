import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './MovieDetailsCard.module.css';

const MovieDetailsCard = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromRef = React.useRef(location.state?.from);

  const voteAverage = Math.floor(movie.vote_average * 10);

  const handleClick = () => {
    navigate(fromRef.current, { replace: false });
  };
  return (
    <>
      <button type="button" onClick={handleClick} className={styles.btn}>
        Go back
      </button>
      <div className={styles.card}>
        <img
          src={
            !movie?.poster_url
              ? 'https://www.123rf.com/stock-photo/no_image_available.html'
              : `https://image.tmdb.org/t/p/w500${movie.poster_url}`
          }
          alt={`${movie.title}`}
          className={styles.img}
        />
        <div className={styles.card_info}>
          <h1 className={styles.title}>
            {movie.title}
            <span>({movie.release_year})</span>
          </h1>
          <p>User score: {voteAverage}%</p>
          <h3>Overview</h3>
          <p className={styles.description}>{movie.overview}</p>
          <h3 className={styles.text}>Genres</h3>
          <ul className={styles.genres}>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_url: PropTypes.string,
    overview: PropTypes.string,
    release_year: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default MovieDetailsCard;
