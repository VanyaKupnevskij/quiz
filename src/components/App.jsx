import { Route, Routes } from 'react-router-dom';
import QuizStart from '../pages/QuizStart';
import QuizPage from '../pages/QuizPage';
import QuizResult from '../pages/QuizResult';

function App() {
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
