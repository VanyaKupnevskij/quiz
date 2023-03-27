import { Route, Routes } from 'react-router-dom';
import QuizStart from '../pages/Start/QuizStart';
import QuizPage from '../pages/Page/QuizPage';
import QuizResult from '../pages/Result/QuizResult';
import QuizList from '../pages/List/QuizList';
import QuizLogin from '../pages/Login/QuizLogin';
import QuizSignUp from '../pages/SignUp/QuizSignUp';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index exact path="quiz/list/" element={<QuizList />} />
        <Route path="quiz/list/subject/:subjectParam" element={<QuizList />} />
        <Route path="quiz/list/chapter/:chapterParam" element={<QuizList />} />
        <Route path="quiz/start/:quizId" element={<QuizStart />} />
        <Route strict exact path="quiz/page/" element={<QuizPage />} />
        <Route strict exact path="quiz/result/" element={<QuizResult />} />
        <Route strict exact path="quiz/login/" element={<QuizLogin />} />
        <Route strict exact path="quiz/signup/" element={<QuizSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
