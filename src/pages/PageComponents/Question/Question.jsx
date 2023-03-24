import styles from './Question.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAnswers,
  selectAnswers,
  selectInfoQuiz,
  setComplete,
  selectIsComplete,
} from '../../../redux/slices/currentQuizSlice';
import { useNavigate } from 'react-router-dom';

let oldQuestionId = 0;
function Question({ questionId = 0, isSubmit = false }) {
  const currentQuiz = useSelector(selectInfoQuiz);
  const answers = useSelector(selectAnswers);
  const isCompleteQuiz = useSelector(selectIsComplete);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isCompleteQuiz) return;

    oldQuestionId = questionId;

    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    recordTime();

    setTimer(0);
    oldQuestionId = questionId;
  }, [questionId]);

  useEffect(() => {
    if (isSubmit) {
      recordTime();
      dispatch(setComplete(true));
      navigate('/quiz/result');
    }
  }, [isSubmit]);

  function recordTime() {
    if (isCompleteQuiz) return;
    if (answers[oldQuestionId] === undefined) return;

    let newAnswers = new Array(0);
    Object.assign(newAnswers, answers);
    newAnswers[oldQuestionId] = {
      time: answers[oldQuestionId].time + timer,
      selectedIndex: answers[oldQuestionId].selectedIndex,
    };
    dispatch(setAnswers(newAnswers));
  }

  const handleOnSelect = (id) => {
    if (isCompleteQuiz) return;

    let newAnswers = new Array(0);
    Object.assign(newAnswers, answers);
    newAnswers[questionId] = {
      time: answers[questionId] ? answers[questionId].time : 0,
      selectedIndex: id,
    };
    dispatch(setAnswers(newAnswers));
  };

  return (
    <>
      <div className={styles.numeric_question}>
        <span className={styles.current}>Q.{questionId + 1}</span>
        <span className={styles.total}> / {currentQuiz.questions.length}</span>
      </div>
      <p className={styles.question}>{currentQuiz.questions[questionId].text}</p>
      <ol className={styles.answers}>
        {currentQuiz.questions[questionId].variants.map((varaint, id) => {
          let markStyle = '';

          if (isCompleteQuiz) {
            if (
              answers[questionId]?.selectedIndex !== currentQuiz.questions[questionId].correct &&
              answers[questionId]?.selectedIndex === id
            )
              markStyle = styles.wrong;

            if (id === currentQuiz.questions[questionId].correct) markStyle = styles.truly;
          } else {
            if (answers[questionId]?.selectedIndex === id) markStyle = styles.checked;
          }

          return (
            <li
              key={id}
              className={cn([styles.variant, markStyle])}
              onClick={() => handleOnSelect(id)}>
              <span className={styles.mark}>{String.fromCharCode(65 + id)}.</span>
              <span className={styles.text}>{varaint.text}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Question;
