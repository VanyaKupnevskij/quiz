import Header from '../components/Header/Header';
import { SubmitButton } from '../components/Button/Button';
import Question from '../components/Question/Question';
import Navigate from './PageComponents/Navigate';
import AdditionalInfo from './PageComponents/AdditionalInfo';

import styles from './QuizPage.module.scss';
import { useState } from 'react';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <Header title={'Quiz'}>
        <SubmitButton isLink linkPath="/quiz/result">
          Submit
        </SubmitButton>
      </Header>
      <section className="main">
        <AdditionalInfo />

        <div className={styles.content}>
          <div className="inner">
            <Question questionId={currentQuestion} setQuestionId={setCurrentQuestion} />
          </div>

          <Navigate questionId={currentQuestion} setQuestionId={setCurrentQuestion} />
        </div>
      </section>
    </>
  );
}

export default QuizPage;
