/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseMovieProps } from "../../types/interfaces";

export const titleFilter = (movie: BaseMovieProps, value: string): boolean => {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (movie: BaseMovieProps, value: string) => {
  const genreId = Number(value);
  const genreIds = movie.genre_ids;
  return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

export const YearFilter = (movie: BaseMovieProps, value: string): boolean => {
    if (!value) return true;
    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 0;
    return releaseYear === parseInt(value, 10);
  };

// eslint-disable-next-line react-refresh/only-export-components
export const languageFilter = (movie: BaseMovieProps, value: string): boolean => {
    return movie.original_language === value;
  };

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface MovieFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
  yearFilter: string;
  languageFilter: string;
}

const MovieFilterUI: React.FC<MovieFilterUIProps> = ({
  onFilterValuesChange,
  titleFilter,
  genreFilter,
  yearFilter,
  languageFilter,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          yearFilter={yearFilter}
          languageFilter={languageFilter}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
