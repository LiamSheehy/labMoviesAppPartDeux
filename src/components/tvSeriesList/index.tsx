import React from "react";
import Grid from "@mui/material/Grid";
import TVSeriesCard from "../tvSeriesCard/";
import { BaseTVSeriesListProps } from "../../types/interfaces";

const TVSeriesList: React.FC<BaseTVSeriesListProps> = ({ tvSeries, action }) => {
  // eslint-disable-next-line prefer-const
  let tvSeriesCards = tvSeries.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVSeriesCard key={s.id} tvSeries={s} action={action}/>
    </Grid>
  ));
  return tvSeriesCards;
}

export default TVSeriesList;