import styles from './CardQuiz.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';
import completeImg from '../../../images/complete.svg';

function CardQuiz() {
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

export default CardQuiz;
