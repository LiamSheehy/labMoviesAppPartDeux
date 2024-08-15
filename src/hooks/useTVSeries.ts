import { useEffect, useState } from "react";
import { getTVSeries } from '../api/tmdb-api';
import { TVSeriesDetailsProps } from '../types/interfaces';

type TVSeriesHookReturnType = [TVSeriesDetailsProps | undefined, React.Dispatch<React.SetStateAction<TVSeriesDetailsProps | undefined>>];

const useTVSeries = (id: string): TVSeriesHookReturnType => {
    const [tvSeries, setTVSeries] = useState<TVSeriesDetailsProps>();

    useEffect(() => {
        getTVSeries(id).then(series => {
            setTVSeries(series);
        });
    }, [id]);

    return [tvSeries, setTVSeries];
};

export default useTVSeries;
