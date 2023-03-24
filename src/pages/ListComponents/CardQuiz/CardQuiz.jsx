import styles from './CardQuiz.module.scss';
import cn from 'classnames';
import completeImg from '../../../images/complete.svg';
import { Link } from 'react-router-dom';

function CardQuiz({ link, title = 'Quiz', answeredQuestion = 0, totalQuestion = 1 }) {
  return (
    <Link to={link} className={styles.root}>
      <div className={styles.top_block}>
        <h2>{title}</h2>
        {answeredQuestion === totalQuestion && <img src={completeImg} alt="complete" />}
      </div>
      <div className={cn([styles.mark, answeredQuestion === 0 && styles.uncomplete])}>
        {answeredQuestion > 0 ? `${answeredQuestion} / ${totalQuestion}` : 'uncomplete'}
      </div>
    </Link>
  );
}

export default CardQuiz;
