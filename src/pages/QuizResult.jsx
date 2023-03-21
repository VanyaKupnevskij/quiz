import Header from '../components/Header/Header';
import Button, { FullWidthButton } from '../components/Button/Button';

import classNames from 'classnames';
import styles from './QuizResult.module.scss';
import againImg from '../images/again.svg';
import timerAvgImg from '../images/timer_avg.svg';
import timerTotalImg from '../images/timer_total.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswers, selectInfoQuiz, clearAnswers } from '../redux/slices/currentQuizSlice';

function handleOnClick() {
  alert('click go to next chapter');
}

function QuizResult() {
  const currentQuiz = useSelector(selectInfoQuiz);
  const answers = useSelector(selectAnswers);
  const dispatch = useDispatch();

  let correctAnswers = 0;
  let wrongAnswer = 0;
  let answerTotalTime = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].selectedIndex === currentQuiz.questions[i].correct) correctAnswers++;
    else wrongAnswer++;

    answerTotalTime += answers[i].time;
  }

  const formatedTimeTotal = toFormatedTime(answerTotalTime);
  const formatedTimeAvg = toFormatedTime(answerTotalTime / (answers.length || 1));

  function toFormatedTime(number) {
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) +
      'm ' +
      (seconds < 10 ? '0' + seconds : seconds) +
      'sec'
    );
  }

  function handleOnAgain() {
    dispatch(clearAnswers());
  }

  return (
    <>
      <Header title={'Quiz Result'} />

      <section className="main">
        <div className={styles.content}>
          <div className={classNames([styles.inner_result, 'inner'])}>
            <InfoQuiz />

            <ScoreBlock correctAnswers={correctAnswers} />

            <div className={styles.correct_answers}>
              <div className={styles.number}>{correctAnswers ?? 0}</div>
              <div className={styles.description}>Correct Answers</div>
            </div>
            <div className={styles.wrong_answers}>
              <div className={styles.number}>{wrongAnswer ?? 0}</div>
              <div className={styles.description}>Wrong Answesrs</div>
            </div>
            <div className={styles.total_time}>
              <img src={timerTotalImg} alt="timer" />
              <div className={styles.number}>{formatedTimeTotal}</div>
              <div className={styles.description}>Total Time</div>
            </div>
            <div className={styles.avg_time_answer}>
              <img src={timerAvgImg} alt="timer" />
              <div className={styles.number}>{formatedTimeAvg}</div>
              <div className={styles.description}>Avg. Time / Answer</div>
            </div>
            <FullWidthButton isLink linkPath="/quiz/page" className={styles.check_answers}>
              Check Answers
            </FullWidthButton>
            <FullWidthButton
              isLink
              linkPath="/quiz/page"
              className={styles.try_again}
              handleClick={handleOnAgain}>
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

function ScoreBlock({ correctAnswers }) {
  const currentQuiz = useSelector(selectInfoQuiz);
  const passedPercent = (100 / currentQuiz.questions.length) * correctAnswers;
  const dashoffset = 282.78302001953125 - 282.78302001953125 * (passedPercent / 100);

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
            strokeDashoffset={dashoffset}
            strokeDasharray="282.78302001953125"
          />
        </svg>
        <div className={styles.value}>
          <span className={styles.current}>{correctAnswers ?? 0}</span>
          <span className={styles.line}>/</span>
          <span className={styles.total}>{currentQuiz.questions.length}</span>
          <span className={styles.caption}>your score</span>
        </div>
      </div>
      <p>
        Congratulations! You have <span className={styles.green}>passed</span> this test with
        <span className={styles.blue}>{` ${Math.floor(passedPercent)}%.`}</span>
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
