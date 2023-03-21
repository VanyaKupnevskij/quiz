import classNames from 'classnames';
import styles from './AdditionalInfo.module.scss';
import timerImg from '../../images/timer.svg';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../redux/slices/currentQuizSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdditionalInfo() {
  const navigate = useNavigate();
  const currentQuiz = useSelector(selectInfoQuiz);

  const _totalTime =
    +currentQuiz.totalTime.substring(0, currentQuiz.totalTime.length - 3) * 60 +
    +currentQuiz.totalTime.substring(currentQuiz.totalTime.length - 2);
  const [limitTimer, setLimitTimer] = useState(_totalTime);

  const minutes = Math.floor(limitTimer / 60);
  const seconds = limitTimer % 60;
  const formatedTime =
    (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

  const percentTime = (100 / _totalTime) * limitTimer;

  useEffect(() => {
    limitTimer > 0 && setTimeout(() => setLimitTimer(limitTimer - 1), 1000);
    if (limitTimer <= 0) navigate('/quiz/result');
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
          <span className={styles.time}>{formatedTime}</span>
        </div>
      </div>
      <div className={styles.line_timer}>
        <div
          className={classNames([styles.progress, percentTime <= 20 && styles.warning_line])}
          style={{ width: percentTime + '%' }}></div>
      </div>
    </div>
  );
}

export default AdditionalInfo;