import classNames from 'classnames';
import styles from './AdditionalInfo.module.scss';
import timerImg from '../../../images/timer.svg';
import { useSelector } from 'react-redux';
import { selectInfoQuiz, selectIsComplete } from '../../../redux/slices/currentQuizSlice';
import { useEffect, useState } from 'react';

function AdditionalInfo({ setIsSubmit }) {
  const currentQuiz = useSelector(selectInfoQuiz);
  const isCompleteQuiz = useSelector(selectIsComplete);

  const _totalTime = stringToSeconds(currentQuiz.totalTime);
  const [limitTimer, setLimitTimer] = useState(_totalTime);

  const formatedTime = secondsToFormated(limitTimer);

  const percentTime = (100 / _totalTime) * limitTimer;

  useEffect(() => {
    if (isCompleteQuiz) return;

    limitTimer > 0 && setTimeout(() => setLimitTimer(limitTimer - 1), 1000);
    if (limitTimer <= 0) setIsSubmit(true);
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
        {isCompleteQuiz || (
          <div className={styles.timer}>
            <img src={timerImg} alt="timer" />
            <span className={styles.time}>{formatedTime}</span>
          </div>
        )}
      </div>
      {isCompleteQuiz || (
        <div className={styles.line_timer}>
          <div
            className={classNames([styles.progress, percentTime <= 20 && styles.warning_line])}
            style={{ width: percentTime + '%' }}></div>
        </div>
      )}
    </div>
  );
}

function stringToSeconds(time = '00:00') {
  return +time.substring(0, time.length - 3) * 60 + +time.substring(time.length - 2);
}

function secondsToFormated(time = 0) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formatedTime =
    (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  return formatedTime;
}

export default AdditionalInfo;
