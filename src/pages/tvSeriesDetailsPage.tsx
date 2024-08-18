import React from "react";
import { useParams } from "react-router-dom";
import TVSeriesDetails from "../components/tvSeriesDetails";
import PageTemplate from "../components/templateTVSeriesPage";
import { getTVSeries, getTVSeriesDetails } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { TVSeriesDetailsProps } from "../types/interfaces";

const TVSeriesDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: tvSeries, error, isLoading, isError } = useQuery<TVSeriesDetailsProps, Error>(
        ["tvSeries", id],
        ()=> getTVSeriesDetails(id || "")
    );
  if (tvSeries) document.title = `${tvSeries.name}`
  
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }

    return (
        <>
            {tvSeries ? (
                <>
                    <PageTemplate tvSeries={tvSeries}>
                        <TVSeriesDetails {...tvSeries} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for TV series details</p>
            )}
        </>
    );
};

export default TVSeriesDetailsPage;
