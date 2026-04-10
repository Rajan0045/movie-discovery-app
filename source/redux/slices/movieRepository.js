import { apiClient } from "../../app/apis/services/apiClient";

export const MovieRepository = {

  getPopularMovies: (page = 1) => {
    return apiClient.get("/movie/popular", {
      params: { page },
    });
  },

 searchMovies: (query, page = 1) => {
    return apiClient.get("/search/movie", {
      params: { query, page },
    });
  },

  getMovieDetails: (movieId) => {
    return apiClient.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "credits"
      },
    });
  },

};