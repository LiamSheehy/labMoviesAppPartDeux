import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TVSeriesDetailsPage from "./pages/tvSeriesDetailsPage"; 
import TVSeries from "./pages/TVSeriesPage"; 
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import FavouriteTVPage from "./pages/favouriteTVSeriesPage"; 
import TVSeriesReviewPage from "./pages/tvSeriesReviewPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TVSeriesContextProvider from "./contexts/tvSeriesContext"; 
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddTVSeriesReviewPage from './pages/addTVSeriesReviewPage';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
});

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <TVSeriesContextProvider>
              <Routes>
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/tvseries" element={<TVSeries />} />
                <Route path="/tvseries/favourites" element={<FavouriteTVPage />} />
                <Route path="/tvseries/:id" element={<TVSeriesDetailsPage />} /> 
                <Route path="/tvseries/reviews/:id" element={<TVSeriesReviewPage />} /> 
                <Route path="/tvseries/reviews/form" element={<AddTVSeriesReviewPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </TVSeriesContextProvider>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
