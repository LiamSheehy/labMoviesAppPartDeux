// Fetch movies with optional filters for release year, language, and pagination
export const getMovies = (year?: number, language: string = 'en-US', sortBy: string = 'popularity.desc', page: number = 5) => {
  const yearQuery = year ? `&primary_release_year=${year}` : '';
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=${language}&include_adult=false&include_video=false&page=${page}${yearQuery}&sort_by=${sortBy}`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch a single movie by ID
export const getMovie = (id: string) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch movie genres
export const getGenres = () => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch movie images
export const getMovieImages = (id: string | number) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return response.json();
  })
  .then((json) => json.posters)
  .catch((error) => {
    throw error;
  });
};

// Fetch movie reviews
export const getMovieReviews = (id: string | number) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return response.json();
  })
  .then((json) => json.results)
  .catch((error) => {
    throw error;
  });
};

// Fetch upcoming movies with pagination
export const getUpcomingMovies = (language: string = 'en-US', page: number = 1) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=${language}&page=${page}`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch upcoming movies. Response status: ${response.status}`);
    return response.json();
  })
  .then((json) => json.results)
  .catch((error) => {
    throw error;
  });
};

// Fetch TV series with optional filters for release year, language, and pagination
export const getTVSeries = (year?: number, language: string = 'en-US', sortBy: string = 'popularity.desc', page: number = 1) => {
  const yearQuery = year ? `&first_air_date_year=${year}` : '';
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=${language}&include_adult=false&page=${page}${yearQuery}&sort_by=${sortBy}`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch TV series. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch a single TV series by ID
export const getTVSeriesDetails = (id: string) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get TV series data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch TV series genres
export const getTVGenres = () => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch TV genres. Response status: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    throw error;
  });
};

// Fetch TV series images
export const getTVSeriesImages = (id: string | number) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch TV series images");
    }
    return response.json();
  })
  .then((json) => json.posters)
  .catch((error) => {
    throw error;
  });
};

// Fetch TV series reviews
export const getTVSeriesReviews = (id: string | number) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch TV series reviews");
    }
    return response.json();
  })
  .then((json) => json.results)
  .catch((error) => {
    throw error;
  });
};

// Fetch upcoming TV series with pagination
export const getUpcomingTVSeries = (language: string = 'en-US', page: number = 1) => {
  return fetch(
    // @ts-ignore
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_KEY}&language=${language}&page=${page}`
  )
  .then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch upcoming TV series. Response status: ${response.status}`);
    return response.json();
  })
  .then((json) => json.results)
  .catch((error) => {
    throw error;
  });
};
