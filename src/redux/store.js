import { configureStore } from '@reduxjs/toolkit';
import currentQuiz from './slices/currentQuizSlice';

export default configureStore({
  reducer: {
    currentQuiz,
  },
});
