import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './components/Redux/LoginSlice';
import  addMovieSlice  from './components/Redux/AddMovieSlice';

const store = configureStore({
  reducer: {
    auth: LoginSlice,
    movies: addMovieSlice,
  },
});

export default store;
