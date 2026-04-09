import { createSlice } from "@reduxjs/toolkit";
import  saveFavorites  from "../../storage/favourite"

const initialState = {
  movies: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.movies = action.payload;
    },

    toggleFavorite: (state, action) => {
      const movie = action.payload;

      const exists = state.movies.find((m) => m.id === movie.id);

      if (exists) {
        state.movies = state.movies.filter((m) => m.id !== movie.id);
      } else {
        state.movies.push(movie);
      }

      // persist
      saveFavorites(state.movies);
    },
  },
});

export const { toggleFavorite, setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;