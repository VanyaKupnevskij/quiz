import Header from '../components/Header/Header';
import { FullWidthButton } from '../components/Button/Button';
import NextBlock from './ResultComponents/NextBlock/NextBlock';
import ScoreBlock from './ResultComponents/ScoreBlock/ScoreBlock';
import InfoQuiz from './ResultComponents/InfoQuiz/InfoQuiz';

import classNames from 'classnames';
import styles from './QuizResult.module.scss';
import againImg from '../images/again.svg';
import timerAvgImg from '../images/timer_avg.svg';
import timerTotalImg from '../images/timer_total.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswers, selectInfoQuiz, clearAnswers } from '../redux/slices/currentQuizSlice';

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
    const seconds = Math.floor(number % 60);
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

export default QuizResult;
