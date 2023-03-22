import styles from './InfoResult.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz, selectAnswers } from '../../../redux/slices/currentQuizSlice';
import timerAvgImg from '../../../images/timer_avg.svg';
import timerTotalImg from '../../../images/timer_total.svg';

function InfoResult({ correctAnswers = 0 }) {
  const currentQuiz = useSelector(selectInfoQuiz);
  const answers = useSelector(selectAnswers);

  let formatedTimeTotal = 0;
  let formatedTimeAvg = 0;
  let answerTotalTime = 0;
  let wrongAnswers = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].selectedIndex !== currentQuiz.questions[i].correct) wrongAnswers++;

    answerTotalTime += answers[i].time;
  }

  formatedTimeTotal = toFormatedTime(answerTotalTime);
  formatedTimeAvg = toFormatedTime(answerTotalTime / (answers.length || 1));

  return (
    <>
      <CorrectAnswers count={correctAnswers} />
      <WrongAnswers count={wrongAnswers} />
      <TotalTime count={formatedTimeTotal} />
      <AverageTime count={formatedTimeAvg} />
    </>
  );
}

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

function CorrectAnswers({ count = 0 }) {
  return (
    <div className={styles.correct_answers}>
      <div className={styles.number}>{count ?? 0}</div>
      <div className={styles.description}>Correct Answers</div>
    </div>
  );
}

function WrongAnswers({ count = 0 }) {
  return (
    <div className={styles.wrong_answers}>
      <div className={styles.number}>{count ?? 0}</div>
      <div className={styles.description}>Wrong Answesrs</div>
    </div>
  );
}

function TotalTime({ count = 0 }) {
  return (
    <div className={styles.total_time}>
      <img src={timerTotalImg} alt="timer" />
      <div className={styles.number}>{count}</div>
      <div className={styles.description}>Total Time</div>
    </div>
  );
}

function AverageTime({ count = 0 }) {
  return (
    <div className={styles.avg_time_answer}>
      <img src={timerAvgImg} alt="timer" />
      <div className={styles.number}>{count}</div>
      <div className={styles.description}>Avg. Time / Answer</div>
    </div>
  );
}

export default InfoResult;
