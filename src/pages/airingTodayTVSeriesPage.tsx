import React from "react";
import PageTemplate from '../components/templateTVSeriesListPage'; 
import { BaseTVSeriesProps } from "../types/interfaces"; 
import { getAiringTodayTVSeries } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch';
import useFiltering from "../hooks/useFiltering";
import TVSeriesFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/tvSeriesFilterUI";
import Spinner from "../components/spinner";

import { useQuery } from 'react-query';

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

const AiringTodayTVSeriesPage: React.FC = () => {
    const { data, error, isLoading, isError } = useQuery<BaseTVSeriesProps[], Error>('airingToday', getAiringTodayTVSeries);
    const { filterValues, setFilterValues, filterFunction } = useFiltering(
      [titleFiltering, genreFiltering]
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

    const tvSeries = data || [];
    const displayedTVSeries = filterFunction(tvSeries);

    return (
      <>
        <PageTemplate
          title="Airing Today TV Series"
          tvSeries={displayedTVSeries}
          action={(tvSeries: BaseTVSeriesProps) => (
            <>
              <AddToFavouritesIcon {...tvSeries} />
              <AddToPlaylistIcon {...tvSeries} />
            </>
          )}
        />
        <TVSeriesFilterUI
          onFilterValuesChange={changeFilterValues}
          titleFilter={filterValues[0].value}
          genreFilter={filterValues[1].value}
        />
      </>
    );
};

export default AiringTodayTVSeriesPage;
