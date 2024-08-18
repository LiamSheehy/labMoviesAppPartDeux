export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
  media_type: 'movie';
}

export interface BaseTVSeriesProps {
  name: string;
  first_air_date: string;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  episode_run_time: number[];
  revenue?: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
  number_of_seasons: number;
  number_of_episodes: number;
  media_type: 'tv';
}

export interface BaseMovieListProps { 
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface BaseTVSeriesListProps { 
  tvSeries: BaseTVSeriesProps[];
  action: (s: BaseTVSeriesProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface TVSeriesDetailsProps extends BaseTVSeriesProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    id: number;
    name: string;
  }[];
  seasons: {
    season_number: number;
    episode_count: number;
    air_date: string;
    poster_path?: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TVSeriesImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface TVSeriesPageProps {
  tvSeries: TVSeriesDetailsProps;
  images: TVSeriesImage[];
}

export type FilterOption = "title" | "genre" | "release_year" | "language" | "sort_by";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
  sortBy: string;
}

export interface TVSeriesListPageTemplateProps extends BaseTVSeriesListProps {
  title: string;
  sortBy: string;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

export interface TVSeriesReview {
  id: string;
  content: string;
  author: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface TVGenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface DiscoverTVSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseTVSeriesProps[];
}
