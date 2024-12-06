import { createSlice } from '@reduxjs/toolkit';
import {continueWatching} from '../Data/ContinueWatchingData';

const initialState = {
  savedMovies: continueWatching,
};

const addMovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
        const movieExists = state.savedMovies.findIndex(movie => movie.id === action.payload.id);
      
        if (movieExists === -1) {
          state.savedMovies.push(action.payload);  
        }
        const finalSavedMovies = JSON.parse(JSON.stringify(state.savedMovies));
        console.log('Final saved movies:', finalSavedMovies);
      },
  }
});

export const { addMovie } = addMovieSlice.actions;
export default addMovieSlice.reducer;
