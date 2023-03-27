import Header from '../../components/Header/Header';
import { HeaderButton } from '../../components/Button/Button';
import Question from '../PageComponents/Question/Question';
import Navigate from '../PageComponents/Navigate/Navigate';
import AdditionalInfo from '../PageComponents/AdditionalInfo/AdditionalInfo';

import styles from './QuizPage.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../redux/slices/currentQuizSlice';

function QuizPage() {
  const currentQuiz = useSelector(selectInfoQuiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit() {
    setIsSubmit(true);
  }

  return (
    <>
      <Header title={'Quiz'} linkBack={'/quiz/start/' + currentQuiz.id}>
        <HeaderButton handleClick={handleSubmit}>Submit</HeaderButton>
      </Header>
      <section className="main">
        <AdditionalInfo setIsSubmit={setIsSubmit} />

        <div className={styles.content}>
          <div className="inner">
            <Question
              questionId={currentQuestion}
              setQuestionId={setCurrentQuestion}
              isSubmit={isSubmit}
            />
          </div>

          <Navigate questionId={currentQuestion} setQuestionId={setCurrentQuestion} />
        </div>
      </section>
    </>
  );
}

export default QuizPage;
