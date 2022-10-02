import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmbdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({

    // Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        console.log(genreIdOrCategoryName);

        // Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          console.log('here');
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Popular movies
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),

});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
} = tmdbApi;
