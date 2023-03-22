import styles from './ScoreBlock.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';
import { useEffect, useState } from 'react';

const LENGTH_DASH = 282.78302001953125;
const START_DELAY_LINE = 500; // ms

function ScoreBlock({ correctAnswers }) {
  const currentQuiz = useSelector(selectInfoQuiz);

  const passedPercent = (100 / currentQuiz.questions.length) * correctAnswers;
  const [dashoffset, setDashoffset] = useState(LENGTH_DASH); // minimum line (0%)

  useEffect(() => {
    setTimeout(
      () => setDashoffset(LENGTH_DASH - LENGTH_DASH * (passedPercent / 100)),
      START_DELAY_LINE,
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.indicator}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <circle r="45" cx="50" cy="50" />
          <path
            className={styles.fill_circle}
            d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDashoffset={dashoffset}
            strokeDasharray={LENGTH_DASH}
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

export default ScoreBlock;
