import React, { useContext } from "react";
import { TVSeriesContext } from "../../contexts/tvSeriesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { BaseTVSeriesProps } from "../../types/interfaces"; 
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface TVSeriesCardProps {
  tvSeries: BaseTVSeriesProps;
  action: (s: BaseTVSeriesProps) => React.ReactNode;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = ({ tvSeries, action }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { favourites, mustWatch } = useContext(TVSeriesContext);

  const isFavourite = favourites.find((id) => id === tvSeries.id) ? true : false;
  const isMustWatch = mustWatch.includes(tvSeries.id);

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          (isFavourite || isMustWatch) && (
            <Avatar sx={styles.avatar}>
              {isFavourite && <FavoriteIcon />}
              {isMustWatch && <PlaylistAddIcon />}
            </Avatar>
          )
        }
        title={
          <Typography variant="h5" component="p">
            {tvSeries.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          tvSeries.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvSeries.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvSeries.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tvSeries)}
        <Link to={`/tvseriespage/${tvSeries.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default TVSeriesCard;
