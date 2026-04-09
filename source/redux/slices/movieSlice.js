import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieRepository } from "./movieRepository";

export const fetchMovies = createAsyncThunk("movies/fetchMovies",
  async (page) => {
    const response = await MovieRepository.getPopularMovies(page);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = [...state.movies, ...action.payload.results];
        state.page += 1;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default movieSlice.reducer;