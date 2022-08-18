import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';

const Movies = React.lazy(() => import('../../pages/Movies'));
const Reviews = React.lazy(() => import('../Reviews'));
const Cast = React.lazy(() => import('../Cast'));
const MovieDetails = React.lazy(() => import('../../pages/MovieDetails'));

export const Layout = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/movies"
        element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Movies />
          </React.Suspense>
        }
      />
      <Route
        path="/movies/:id"
        element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <MovieDetails />
          </React.Suspense>
        }
      >
        <Route
          path="/movies/:id/cast"
          element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <Cast />
            </React.Suspense>
          }
        />
        <Route
          path="/movies/:id/reviews"
          element={
            <React.Suspense fallback={<h2>Loading...</h2>}>
              <Reviews />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
