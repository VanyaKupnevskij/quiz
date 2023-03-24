import { Route, Routes } from 'react-router-dom';
import QuizStart from '../pages/Start/QuizStart';
import QuizPage from '../pages/Page/QuizPage';
import QuizResult from '../pages/Result/QuizResult';
import QuizList from '../pages/List/QuizList';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index exact path="quiz/list/" element={<QuizList />} />
        <Route strict exact path="quiz/start/" element={<QuizStart />} />
        <Route strict exact path="quiz/page/" element={<QuizPage />} />
        <Route strict exact path="quiz/result/" element={<QuizResult />} />
      </Routes>
    </div>
  );
}

export default App;
