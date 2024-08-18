import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTVSeriesPage";
import TVSeriesReview from "../components/tvSeriesReview";
import { TVSeriesDetailsProps, Review } from "../types/interfaces";

interface LocationState {
    tvSeries: TVSeriesDetailsProps;
    review: Review;
}

const TVSeriesReviewPage: React.FC = () => {
    const { state } = useLocation<LocationState>();
    const { tvSeries, review } = state;

    return (
        <PageTemplate tvSeries={tvSeries}>
            <TVSeriesReview {...review} />
        </PageTemplate>
    );
};

export default TVSeriesReviewPage;
