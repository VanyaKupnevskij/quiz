import Header from '../components/Header/Header';
import { SubmitButton } from '../components/Button/Button';
import Question from './PageComponents/Question/Question';
import Navigate from './PageComponents/Navigate/Navigate';
import AdditionalInfo from './PageComponents/AdditionalInfo/AdditionalInfo';

import styles from './QuizPage.module.scss';
import { useState } from 'react';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit() {
    setIsSubmit(true);
  }

  return (
    <>
      <Header title={'Quiz'}>
        <SubmitButton handleClick={handleSubmit}>Submit</SubmitButton>
      </Header>
      <section className="main">
        <AdditionalInfo />

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
