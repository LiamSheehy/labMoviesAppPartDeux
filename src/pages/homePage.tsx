import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter, genreFilter } from "../components/movieFilterUI";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Pagination from "@mui/material/Pagination"; // Import Pagination component

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1); // Manage the current page state
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["discover", page], // Pass the page to the query
    () => getMovies(page) // Fetch movies for the current page
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value); // Update the current page when pagination is clicked
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);
  const totalPages = data ? data.total_pages : 1; // Get total pages from API response

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie) => <AddToFavouritesIcon {...movie} />}
        page={page} // Pass current page to the template (if needed)
        totalPages={totalPages} // Pass total pages to the template (if needed)
        onPageChange={handlePageChange} // Handle pagination changes
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
      <Pagination 
        count={totalPages} 
        page={page} 
        onChange={handlePageChange} 
        color="primary" 
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default HomePage;
