import { configureStore } from '@reduxjs/toolkit';
import currentQuizSlice from './slices/currentQuizSlice';

export default configureStore({
  reducer: {
    currentQuizSlice,
  },
});
