import React, {MouseEvent, useContext} from "react";
import { TVSeriesContext } from "../../contexts/tvSeriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {BaseTVSeriesProps} from "../../types/interfaces"

const AddToFavouritesIcon: React.FC<BaseTVSeriesProps> = (tvSeries) => {
  const context = useContext(TVSeriesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(tvSeries);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;