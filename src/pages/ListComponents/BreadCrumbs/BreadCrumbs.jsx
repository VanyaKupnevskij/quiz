import styles from './BreadCrumbs.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function BreadCrumbs() {
  const currentQuiz = useSelector(selectInfoQuiz);

  return (
    <div className={styles.root}>
      <span className={styles.subtitle}>{currentQuiz.subject}</span>
      {' / '}
      <span className={styles.subtitle}>{currentQuiz.chapter}</span>
    </div>
  );
}

export default BreadCrumbs;
