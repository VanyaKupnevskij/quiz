import styles from './DetailInfo.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function DetailInfo() {
  const currentQuiz = useSelector(selectInfoQuiz);

  const _totalTime = formatedTime(currentQuiz.totalTime);

  return (
    <div className={styles.root}>
      <div className={styles.total_questions}>
        Total Questions: <b>{currentQuiz?.questions?.length}</b>
      </div>
      <div className={styles.total_time}>
        Total Time: <b>{_totalTime} min</b>
      </div>
      {currentQuiz?.description.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function formatedTime(time = '00:00') {
  return time.substring(time.length - 2) === '00' ? time.substring(0, time.length - 3) : time;
}

export default DetailInfo;
