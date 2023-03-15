import styles from './Question.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../redux/slices/currentQuizSlice';

function Question({ questionId = 0 }) {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <>
      <div className={styles.numeric_question}>
        <span className={styles.current}>Q.{questionId + 1}</span>
        <span className={styles.total}> / {currentQuiz.questions.length}</span>
      </div>
      <p className={styles.question}>{currentQuiz.questions[questionId].text}</p>
      <ol className={styles.answers}>
        {currentQuiz.questions[questionId].variants.map((varaint, id) => (
          <li key={id} className={styles.variant}>
            <span className={styles.mark}>{String.fromCharCode(65 + id)}.</span>
            <span className={styles.text}>{varaint.text}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Question;
