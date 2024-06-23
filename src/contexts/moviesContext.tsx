import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[]; // New state for 'Must Watch' list
    addToFavourites: (movie: BaseMovieProps) => void;
    removeFromFavourites: (movie: BaseMovieProps) => void;
    addToMustWatch: (movie: BaseMovieProps) => void;
    removeFromMustWatch: (movie: BaseMovieProps) => void;
    addReview: (movie: BaseMovieProps, review: Review) => void;
}

const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addToMustWatch: () => {}, 
    removeFromMustWatch: () => {}, 
    addReview: (movie, review) => ({ movieId: movie.id, review }), 
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]); // State for 'Must Watch' list
    const [myReviews, setMyReviews] = useState<{ [key: number]: Review }>({});  // Updated to be an object mapping movie IDs to reviews

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((mId) => mId !== movie.id));
    }, []);

    const addReview = (movie: BaseMovieProps, review: Review) => {
        setMyReviews((prevReviews) => ({ ...prevReviews, [movie.id]: review }));
    };

    return (
        <MoviesContext.Provider
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
        </MoviesContext.Provider>
    );
};
export default MoviesContextProvider;