import React from 'react';
import PropTypes from 'prop-types';

import styles from './CastItem.module.css';

export const CastItem = ({ cast }) => {
  return (
    <li className={styles.item}>
      <img
        src={
          cast.image_url
            ? `https://image.tmdb.org/t/p/w500${cast.image_url}`
            : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
        }
        alt={cast.name}
        className={styles.img}
      />
      <h3>{cast.name}</h3>
      <p>
        <span>Character </span>: {cast.character}
      </p>
    </li>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
};
