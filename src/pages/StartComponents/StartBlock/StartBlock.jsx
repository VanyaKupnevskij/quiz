import { FullWidthButton } from '../../../components/Button/Button';

import timerImg from '../../../images/timer.svg';
import styles from './StartBlock.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function StartBlock() {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <div className={styles.root}>
      <div className={styles.limit_time}>
        <img src={timerImg} alt="timer" />
        <span>{currentQuiz.totalTime}</span>
      </div>
      <FullWidthButton isLink linkPath="/quiz/page">
        Start Quiz
      </FullWidthButton>
    </div>
  );
}

export default StartBlock;
