import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { TVSeriesDetailsProps } from "../../types/interfaces"; 

const styles = {
  root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5, 
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const TVSeriesHeader: React.FC<TVSeriesDetailsProps> = (tvSeries) => {
  const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
  const isTVSeriesFavourite = favourites.find((favourite: { id: number; }) => favourite.id === tvSeries.id) !== undefined;

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      { isTVSeriesFavourite && ( 
        <Avatar sx={styles.avatar}>
          <FavoriteIcon/>
        </Avatar>
      )}

      <Typography variant="h4" component="h3">
        {tvSeries.name}{"   "}
        <a href={tvSeries.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${tvSeries.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVSeriesHeader;