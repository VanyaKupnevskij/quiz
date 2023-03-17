import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoQuiz: {
    title: 'Title',
    pathImage: '/',
    subject: '-',
    chapter: '-',
    totalTime: '10',
    description: '-',
    questions: [
      {
        text: 'Question?',
        correct: 0,
        variants: [
          {
            text: 'Variant 1',
          },
          {
            text: 'Variant 2',
          },
        ],
      },
    ],
  },
  answers: [],
};

const currentQuizSlice = createSlice({
  name: 'currentQuiz',
  initialState,
  reducers: {
    setQuiz(state, action) {
      state.infoQuiz = action.payload;
    },
    setAnswers(state, action) {
      state.answers = action.payload;
    },
    addAnswer(state, action) {
      state.answers.push(action.payload);
    },
    clearAnswers(state, actoin) {
      state.answers = new Array(0);
    },
  },
});

export const { setQuiz, setAnswers, addAnswer, clearAnswers } = currentQuizSlice.actions;
export const selectInfoQuiz = (state) => state.currentQuiz.infoQuiz;
export const selectAnswers = (state) => state.currentQuiz.answers;
export default currentQuizSlice.reducer;
