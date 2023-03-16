import { Route, Routes } from 'react-router-dom';
import QuizStart from '../pages/QuizStart';
import QuizPage from '../pages/QuizPage';
import QuizResult from '../pages/QuizResult';

import { Quizes } from '../DBQuiz';
import { useDispatch } from 'react-redux';
import { setQuiz } from '../redux/slices/currentQuizSlice';

function App() {
  const dispatch = useDispatch();

  dispatch(setQuiz(Quizes[0]));

  return (
    <div className="container">
      <Routes>
        <Route index exact path="quiz/" element={<QuizStart />} />
        <Route strict exact path="quiz/page/" element={<QuizPage />} />
        <Route strict exact path="quiz/result/" element={<QuizResult />} />
      </Routes>
    </div>
  );
}

export default App;
