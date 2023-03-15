import Header from '../components/Header/Header';
import Button, { SubmitButton, GrayButton } from '../components/Button/Button';
import Question from '../components/Question/Question';

import classNames from 'classnames';
import styled from 'styled-components';
import styles from './QuizPage.module.scss';
import timerImg from '../images/timer.svg';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../redux/slices/currentQuizSlice';
import { useEffect, useState } from 'react';

function handleOnClick() {
  alert('click button/link');
}

function QuizPage() {
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
            <Question questionId={0} />
          </div>

          <Navigate />
        </div>
      </section>
    </>
  );
}

function AdditionalInfo() {
  const currentQuiz = useSelector(selectInfoQuiz);
  const [limitTimer, setLimitTimer] = useState(currentQuiz.totalTime);

  useEffect(() => {
    limitTimer > 0 && setTimeout(() => setLimitTimer(limitTimer - 1), 1000);
  }, [limitTimer]);

  return (
    <div className={styles.additional_info}>
      <h2 className={styles.title}>{currentQuiz?.title}</h2>
      <div className={styles.top_info}>
        <div className={styles.category}>
          <span className={styles.subtitle}>{currentQuiz?.subject}</span>
          {' / '}
          <span className={styles.subtitle}>{currentQuiz?.chapter}</span>
        </div>
        <div className={styles.timer}>
          <img src={timerImg} alt="timer" />
          <span className={styles.time}>{limitTimer}:00</span>
        </div>
      </div>
      <div className={styles.line_timer}>
        <div
          className={styles.progress}
          style={{ width: (100 / currentQuiz.totalTime) * limitTimer + '%' }}></div>
      </div>
    </div>
  );
}

function Navigate() {
  return (
    <div className={styles.navigate}>
      <GrayButton handleClick={handleOnClick}>Previous</GrayButton>
      <Button handleClick={handleOnClick}>Next</Button>
    </div>
  );
}

export default QuizPage;
