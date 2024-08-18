import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVSeriesPage";
import TVSeriesReview from "../components/tvSeriesReview";

const TVSeriesReviewPage: React.FC = () => {
    const { state } = useLocation()
    const { tvSeries, tvseriesreview } = state;

    return (
        <PageTemplate tvSeries={tvSeries}>
            <TVSeriesReview {...tvseriesreview} />
        </PageTemplate>
    );
};

export default TVSeriesReviewPage;
