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
  answers: [
    {
      time: 0,
      selectedIndex: null,
    },
  ],
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
  },
});

export const { setQuiz, setAnswers, addAnswer } = currentQuizSlice.actions;
export const selectInfoQuiz = (state) => state.currentQuiz.infoQuiz[0];
export default currentQuizSlice.reducer;
