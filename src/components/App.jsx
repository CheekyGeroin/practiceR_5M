import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from './MovieDetails/Cast/Cast';
import Reviews from './MovieDetails/Reviews/Reviews';
import HomePage from 'Pages/HomePage';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const Movies = lazy(() => import('../Pages/MoviesPage'));
  const MovieDetails = lazy(() => import('../Pages/MovieDetailsPage'));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
