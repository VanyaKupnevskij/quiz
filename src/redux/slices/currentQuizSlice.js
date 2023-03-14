import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idQuiz: 0,
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
      state.idQuiz = action.payload;
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

export default currentQuizSlice.reducer;
