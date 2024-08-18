import React, { useContext } from "react";
import PageTemplate from "../components/templateTVSeriesListPage";
import { TVSeriesContext } from "../contexts/tvSeriesContext";
import { useQueries } from "react-query";
import { getTVSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import TVSeriesFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/tvSeriesFilterUI";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

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

const FavouriteTVSeriesPage: React.FC = () => {
  const { favourites: tvSeriesIds } = useContext(TVSeriesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  const favouriteTVSeriesQueries = useQueries(
    tvSeriesIds.map((tvSeriesId) => {
      return {
        queryKey: ["tvSeries", tvSeriesId],
        queryFn: () => getTVSeries(tvSeriesId.toString()),
      };
    })
  );

  const isLoading = favouriteTVSeriesQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteTVSeriesQueries.map((q) => q.data);
  const displayedTVSeries = allFavourites
    ? filterFunction(allFavourites)
    : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Favourite TV Series"
        tvSeries={displayedTVSeries}
        action={(tvSeries) => {
          return (
            <>
              <RemoveFromFavourites {...tvSeries} />
              <WriteReview {...tvSeries} />
            </>
          );
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

export default FavouriteTVSeriesPage;
