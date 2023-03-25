import Button from '../../../components/Button/Button';

import styles from './NextBlock.module.scss';
import { Quizes } from '../../../DBQuiz';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function NextBlock() {
  const currentQuiz = useSelector(selectInfoQuiz);

  const currentQuizIndex = Quizes.indexOf(currentQuiz);
  const nextQuizId = currentQuizIndex <= Quizes.length - 2 ? Quizes[currentQuizIndex + 1].id : -1;
  console.log(nextQuizId);

  return (
    nextQuizId !== -1 && (
      <div className={styles.root}>
        <div className={styles.chapter}>
          <div className={styles.head}>Next Quiz</div>
          <div>{Quizes.find((quiz) => quiz.id === nextQuizId).title}</div>
        </div>
        <Button isLink linkPath={'/quiz/start/' + nextQuizId}>
          Go
        </Button>
      </div>
    )
  );
}

export default NextBlock;
