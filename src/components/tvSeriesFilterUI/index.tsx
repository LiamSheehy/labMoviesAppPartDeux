import React, { useState } from "react";
import FilterCard from "../filterTVSeriesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseTVSeriesProps } from "../../types/interfaces";

export const titleFilter = (tvSeries: BaseTVSeriesProps, value: string): boolean => {
    return tvSeries.name.toLowerCase().includes(value.toLowerCase());
};

export const genreFilter = (tvSeries: BaseTVSeriesProps, value: string) => {
    const genreId = Number(value);
    const genreIds = tvSeries.genre_ids;
    return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    },
};

interface TVSeriesFilterUIProps {
    onFilterValuesChange: (title: string, genre: string) => void;
    titleFilter: string;
    genreFilter: string;
}

const TVSeriesFilterUI: React.FC<TVSeriesFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterCard
                    onUserInput={onFilterValuesChange}
                    titleFilter={titleFilter}
                    genreFilter={genreFilter}
                />
            </Drawer>
        </>
    );
};

export default TVSeriesFilterUI;
