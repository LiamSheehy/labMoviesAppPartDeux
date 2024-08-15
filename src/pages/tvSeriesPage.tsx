import React from "react";
import PageTemplate from "../components/templateTVSeriesListPage";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { getTVSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TVSeriesFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/tvSeriesFilterUI";
import { DiscoverTVSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const titleFiltering = {
  name: "name",
  value: "",
  condition: titleFilter,
};

const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const TVSeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>(
    "discoverTV",
    getTVSeries
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const tvSeries = data ? data.results : [];
  const displayedTVSeries = filterFunction(tvSeries);

  return (
    <>
      <PageTemplate
        title="Discover TV Series"
        tvSeries={displayedTVSeries}
        action={(tvSeries: BaseTVSeriesProps) => {
          return <AddToFavouritesIcon {...tvSeries} />;
        }}
      />
      <TVSeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default TVSeriesPage;
