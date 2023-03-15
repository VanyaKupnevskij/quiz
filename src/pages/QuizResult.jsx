import Header from '../components/Header/Header';
import Button, { FullWidthButton } from '../components/Button/Button';

import classNames from 'classnames';
import styles from './QuizResult.module.scss';
import againImg from '../images/again.svg';
import timerAvgImg from '../images/timer_avg.svg';
import timerTotalImg from '../images/timer_total.svg';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../redux/slices/currentQuizSlice';

function handleOnClick() {
  alert('click button/link');
}

function QuizResult() {
  return (
    <>
      <Header title={'Quiz Result'} />

      <section className="main">
        <div className={styles.content}>
          <div className={classNames([styles.inner_result, 'inner'])}>
            <InfoQuiz />

            <ScoreBlock />

            <div className={styles.correct_answers}>
              <div className={styles.number}>4</div>
              <div className={styles.description}>Correct Answers</div>
            </div>
            <div className={styles.wrong_answers}>
              <div className={styles.number}>5</div>
              <div className={styles.description}>Wrong Answesrs</div>
            </div>
            <div className={styles.total_time}>
              <img src={timerTotalImg} alt="timer" />
              <div className={styles.number}>12m 20sec</div>
              <div className={styles.description}>Total Time</div>
            </div>
            <div className={styles.avg_time_answer}>
              <img src={timerAvgImg} alt="timer" />
              <div className={styles.number}>2m 28sec</div>
              <div className={styles.description}>Avg. Time / Answer</div>
            </div>
            <FullWidthButton isLink linkPath="/quiz/page" className={styles.check_answers}>
              Check Answers
            </FullWidthButton>
            <FullWidthButton isLink linkPath="/quiz/page" className={styles.try_again}>
              <img src={againImg} alt="again" /> Try Quiz Again
            </FullWidthButton>
          </div>
        </div>

        <NextBlock />
      </section>
    </>
  );
}

function InfoQuiz() {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <div className={styles.info_quiz}>
      <h2>{currentQuiz.title}</h2>
      <div className={styles.category}>
        <span className={styles.subtitle}>{currentQuiz.subject}</span>
        {' / '}
        <span className={styles.subtitle}>{currentQuiz.chapter}</span>
      </div>
    </div>
  );
}

function ScoreBlock() {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <div className={styles.score}>
      <div className={styles.indicator}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <circle r="45" cx="50" cy="50" />
          <path
            className={styles.fill_circle}
            d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDashoffset="282.78302001953125"
            strokeDasharray="282.78302001953125"
          />
        </svg>
        <div className={styles.value}>
          <span className={styles.current}>4</span>
          <span className={styles.line}>/</span>
          <span className={styles.total}>{currentQuiz.questions.length}</span>
          <span className={styles.caption}>your score</span>
        </div>
      </div>
      <p>
        Congratulations! You have <span className={styles.green}>passed</span> this test with
        <span className={styles.blue}>{' 80%.'}</span>
      </p>
    </div>
  );
}

function NextBlock() {
  return (
    <div className={styles.next_block}>
      <div className={styles.chapter}>
        <div className={styles.head}>Next Chapter</div>
        <div>Quadratic Equations</div>
      </div>
      <Button isLink linkPath="/quiz" handleClick={handleOnClick}>
        Go
      </Button>
    </div>
  );
}

export default QuizResult;
