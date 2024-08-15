import React, { useState, useCallback } from "react";
import { BaseTVSeriesProps, TVSeriesReview } from "../types/interfaces";

interface TVSeriesContextInterface {
    favourites: number[];
    mustWatch: number[];
    addToFavourites: (series: BaseTVSeriesProps) => void;
    removeFromFavourites: (series: BaseTVSeriesProps) => void;
    addToMustWatch: (series: BaseTVSeriesProps) => void;
    removeFromMustWatch: (series: BaseTVSeriesProps) => void;
    addReview: (series: BaseTVSeriesProps, review: TVSeriesReview) => void;
}

const initialContextState: TVSeriesContextInterface = {
    favourites: [],
    mustWatch: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addToMustWatch: () => {},
    removeFromMustWatch: () => {},
    addReview: (series, review) => ({ tvSeriesId: series.id, review }),
};

export const TVSeriesContext = React.createContext<TVSeriesContextInterface>(initialContextState);

const TVSeriesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<{ [key: number]: TVSeriesReview }>({});

    const addToFavourites = useCallback((series: BaseTVSeriesProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(series.id)) {
                return [...prevFavourites, series.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((series: BaseTVSeriesProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((sId) => sId !== series.id));
    }, []);

    const addToMustWatch = useCallback((series: BaseTVSeriesProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(series.id)) {
                return [...prevMustWatch, series.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((series: BaseTVSeriesProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((sId) => sId !== series.id));
    }, []);

    const addReview = (series: BaseTVSeriesProps, review: TVSeriesReview) => {
        setMyReviews((prevReviews) => ({ ...prevReviews, [series.id]: review }));
    };

    return (
        <TVSeriesContext.Provider
            value={{
                favourites,
                mustWatch,
                addToFavourites,
                removeFromFavourites,
                addToMustWatch,
                removeFromMustWatch,
                addReview,
            }}
        >
            {children}
        </TVSeriesContext.Provider>
    );
};

export default TVSeriesContextProvider;
