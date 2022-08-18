import { Outlet, useParams, Link, Navigate } from 'react-router-dom';
import React from 'react';

import { fetchMovieData } from '../../helpers/index';
const MovieDetailsCard = React.lazy(() => import('./MovieDetailsCard/index'));

const MovieDetails = () => {
  const [movie, setMovie] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieData(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      {!movie ? (
        <div>
          Loading...
          <Navigate to="/" />
        </div>
      ) : (
        <>
          <React.Suspense fallback={<div>Loading...</div>}>
            <MovieDetailsCard movie={movie} />
          </React.Suspense>
          <div>
            <h2>Additional information</h2>
            <Link to={`cast`}>Cast</Link>
            <br />
            <Link to={`reviews`}>Reviews</Link>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
