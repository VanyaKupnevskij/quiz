import styles from './CardQuiz.module.scss';
import cn from 'classnames';
import completeImg from '../../../images/complete.svg';
import { Link } from 'react-router-dom';
import { setQuiz } from '../../redux/slices/currentQuizSlice';
import { Quizes } from '../../DBQuiz';
import { useDispatch } from 'react-redux';

function CardQuiz({ idQuiz = 0 }) {
  const dispatch = useDispatch();

  const handlerOnClick = () => {
    dispatch(setQuiz(Quizes[idQuiz]));
  };

  return (
    <Link to={'/quiz/start'} className={styles.root} onClick={handlerOnClick}>
      <div className={styles.top_block}>
        <h2>{currentQuiz.title}</h2>
        {answeredQuestion === totalQuestion && <img src={completeImg} alt="complete" />}
      </div>
      <div className={cn([styles.mark, answeredQuestion === 0 && styles.uncomplete])}>
        {answeredQuestion > 0 ? `${answeredQuestion} / ${totalQuestion}` : 'uncomplete'}
      </div>
    </Link>
  );
}

export default CardQuiz;
