import React from "react";
import Header from "../headerTVSeriesList";
import Grid from "@mui/material/Grid";
import TVSeriesList from "../tvSeriesList";
import { TVSeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const TVSeriesListPageTemplate: React.FC<TVSeriesListPageTemplateProps> = ({
  tvSeries,
  title,
  action,
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TVSeriesList action={action} tvSeries={tvSeries}></TVSeriesList>
      </Grid>
    </Grid>
  );
};

export default TVSeriesListPageTemplate;