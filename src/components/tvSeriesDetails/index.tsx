import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRateIcon from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TVSeriesReviews from '../tvSeriesReviews';

import { TVSeriesDetailsProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const TVSeriesDetails: React.FC<TVSeriesDetailsProps> = ({
    overview = "No overview available",
    genres = [],
    episode_run_time = [],
    vote_average = 0,
    vote_count = 0,
    first_air_date = "N/A",
    number_of_seasons = 0,
    number_of_episodes = 0,
}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {overview}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {genres.map((g) => (
                    <li key={g.id}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label={`${episode_run_time[0] || 'N/A'} min.`} />
                <Chip
                    icon={<StarRateIcon />}
                    label={`${vote_average} (${vote_count})`}
                />
                <Chip label={`First Aired: ${first_air_date}`} />
                <Chip label={`Seasons: ${number_of_seasons}`} />
                <Chip label={`Episodes: ${number_of_episodes}`} />
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <TVSeriesReviews genres={[]} production_countries={[]} seasons={[]} name={""} first_air_date={""} homepage={undefined} id={0} imdb_id={""} original_language={""} overview={""} vote_average={0} popularity={0} tagline={""} episode_run_time={[]} vote_count={0} number_of_seasons={0} number_of_episodes={0} />
            </Drawer>
        </>
    );
};

export default TVSeriesDetails;
