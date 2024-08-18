import React from "react";
import PageTemplate from "../components/templateTVSeriesPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { BaseTVSeriesProps, TVSeriesDetailsProps } from "../types/interfaces";

const WriteTVSeriesReviewPage: React.FC = () => {
    const location = useLocation();
    const { tvSeriesId } = location.state;
    const { data: tvSeries, error, isLoading, isError } = useQuery<TVSeriesDetailsProps, Error>(
        ["tvSeries", tvSeriesId],
        () => getTVSeries(tvSeriesId)
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    
    return (
        <>
            {tvSeries ? (
                <PageTemplate tvSeries={tvSeries}>
                    <ReviewForm {...tvSeries} />
                </PageTemplate>
            ) : (
                <p>Waiting for TV series review details</p>
            )}
        </>
    );
};

export default WriteTVSeriesReviewPage;
