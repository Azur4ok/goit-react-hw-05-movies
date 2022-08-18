import styles from './Searchbar.module.css';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchSearchedMovie from '../../helpers/index';
import { MoviesList } from 'components/MoviesList';

export const Searchbar = () => {
  const [name, setName] = React.useState('');
  const [searchFilm, setSearchFilm] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const backSearch = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    if (!name) return alert('invalid input');
    setSearchParams({ query: name });
    setName('');
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchSearchedMovie(backSearch);
        setSearchFilm(results);
      } catch (error) {
        console.log(error);
        return alert('failed to retrieve data');
      }
    };
    if (backSearch) {
      fetchData();
    }
  }, [backSearch]);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      {searchFilm.length ? (
        <MoviesList movies={searchFilm} />
      ) : backSearch ? (
        <h3 className={styles.notification}>
          No movies found by this {backSearch}
        </h3>
      ) : (
        <h3 className={styles.notification}>enter a movie title</h3>
      )}
    </>
  );
};
