import styles from './InfoQuiz.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function InfoQuiz() {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <div className={styles.root}>
      <h2>{currentQuiz.title}</h2>
      <div className={styles.category}>
        <span className={styles.subtitle}>{currentQuiz.subject}</span>
        {' / '}
        <span className={styles.subtitle}>{currentQuiz.chapter}</span>
      </div>
    </div>
  );
}

export default InfoQuiz;
