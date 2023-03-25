import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoQuiz: {},
  isComplete: false,
  answers: [],
};

const currentQuizSlice = createSlice({
  name: 'currentQuiz',
  initialState,
  reducers: {
    setQuiz(state, action) {
      state.infoQuiz = action.payload;
      state.isComplete = false;
      state.answers = new Array(0);
    },
    setAnswers(state, action) {
      state.answers = action.payload;
    },
    setComplete(state, action) {
      state.isComplete = action.payload;
    },
    clearAnswers(state, action) {
      state.isComplete = false;
      state.answers = new Array(0);
    },
  },
});

export const { setQuiz, setAnswers, setComplete, clearAnswers } = currentQuizSlice.actions;
export const selectInfoQuiz = (state) => state.currentQuiz.infoQuiz;
export const selectAnswers = (state) => state.currentQuiz.answers;
export const selectIsComplete = (state) => state.currentQuiz.isComplete;
export default currentQuizSlice.reducer;
