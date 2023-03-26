import styles from './CardQuiz.module.scss';
import cn from 'classnames';
import completeImg from '../../../images/complete.svg';
import { Link } from 'react-router-dom';
import { UserData } from '../../../DBQuiz';

function CardQuiz({ subjectParam, chapterParam, item }) {
  let correctAnswers = 0;
  let totalQuestions = 1;

  let linkPath = '/quiz/list/';
  if (subjectParam) {
    linkPath += 'chapter/' + item.link;
  } else if (chapterParam) {
    linkPath = '/quiz/start/' + item.id;

    correctAnswers =
      UserData.completedQuizzes.find((quiz) => quiz.quizId === item.id)?.correctAnswers ?? 0;
    totalQuestions = item.questions.length;
  } else {
    linkPath += 'subject/' + item.link;
  }

  return (
    <Link to={linkPath} className={styles.root}>
      <div className={styles.top_block}>
        <h2>{item.title}</h2>
        {chapterParam && item && correctAnswers === totalQuestions && (
          <img src={completeImg} alt="complete" />
        )}
      </div>
      {chapterParam && item && (
        <div className={cn([styles.mark, correctAnswers === 0 && styles.uncomplete])}>
          {correctAnswers > 0 ? `${correctAnswers} / ${totalQuestions}` : 'uncomplete'}
        </div>
      )}
    </Link>
  );
}

export default CardQuiz;
