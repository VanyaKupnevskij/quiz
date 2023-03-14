import Header from '../components/Header/Header';
import Button, { SubmitButton, GrayButton } from '../components/Button/Button';
import Question from '../components/Question/Question';

import styles from './QuizPage.module.scss';
import timerImg from '../images/timer.svg';

function handleOnClick() {
  alert('click button/link');
}

function QuizStart() {
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
            <Question />
          </div>

          <Navigate />
        </div>
      </section>
    </>
  );
}

function AdditionalInfo() {
  return (
    <div className={styles.additional_info}>
      <h2 className={styles.title}>Pair of Linear Equation in Two Variables</h2>
      <div className={styles.top_info}>
        <div className={styles.category}>
          <span className={styles.subtitle}>Maths</span>
          {' / '}
          <span className={styles.subtitle}>Real Numbers</span>
        </div>
        <div className={styles.timer}>
          <img src={timerImg} alt="timer" />
          <span className={styles.time}>07:28</span>
        </div>
      </div>
      <div className={styles.line_timer}></div>
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

export default QuizStart;
