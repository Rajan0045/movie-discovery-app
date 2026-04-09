import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/movieSlice";
import favoriteReducer from '../slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoriteReducer,
  },
});