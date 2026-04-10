import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieRepository } from "./movieRepository";

// ---------------- popular movie ---------------->>
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    const response = await MovieRepository.getPopularMovies(page);
    return response.data;
  }
);

// ---------------- search movie ------------------>>
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async ({ query, page }) => {
    const response = await MovieRepository.searchMovies(query, page);
    return { ...response.data, page };
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchResults: [],
    page: 1,
    searchPage: 1,
    loading: false,
    searchLoading: false,
    error: null,
    isSearching: false,
    query: "",
  },

  reducers: {
    clearSearch: (state) => {
      state.searchResults = [];
      state.searchPage = 1;
      state.isSearching = false;
      state.query = "";
    },
  },

  extraReducers: (builder) => {
    // ---------------- popular ---------------->>
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

    // ---------------- search ---------------->>
    builder.addCase(searchMovies.pending, (state) => {
      state.searchLoading = true;
      state.isSearching = true;
    })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchLoading = false;
        const isFirstPage = action.payload.page === 1;
        state.searchResults = isFirstPage ? action.payload.results : [...state.searchResults, ...action.payload.results];
        state.searchPage += 1;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.searchLoading = false;
        state.error = "Search failed";
      });
  }
});

export const { clearSearch } = movieSlice.actions;
export default movieSlice.reducer;