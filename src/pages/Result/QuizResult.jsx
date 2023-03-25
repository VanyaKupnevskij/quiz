import Header from '../../components/Header/Header';
import { FullWidthButton } from '../../components/Button/Button';
import NextBlock from '../ResultComponents/NextBlock/NextBlock';
import ScoreBlock from '../ResultComponents/ScoreBlock/ScoreBlock';
import InfoQuiz from '../ResultComponents/InfoQuiz/InfoQuiz';
import InfoResult from '../ResultComponents/InfoResult/InfoResult';

import classNames from 'classnames';
import styles from './QuizResult.module.scss';
import againImg from '../../images/again.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfoQuiz, setComplete, clearAnswers } from '../../redux/slices/currentQuizSlice';
import { UserData } from '../../DBQuiz';

function QuizResult() {
  const currentQuiz = useSelector(selectInfoQuiz);
  const dispatch = useDispatch();

  let correctAnswers = UserData.completedQuizzes.find(
    (quiz) => quiz.quizId === currentQuiz.id,
  ).correctAnswers;

  function handleOnAgain() {
    dispatch(setComplete(false));
    dispatch(clearAnswers());
  }

  return (
    <>
      <Header title={'Quiz Result'} />

      <section className="main">
        <div className={styles.content}>
          <div className={classNames([styles.inner_result, 'inner'])}>
            <InfoQuiz />

            <ScoreBlock correctAnswers={correctAnswers} />

            <InfoResult correctAnswers={correctAnswers} />

            <FullWidthButton isLink linkPath="/quiz/page" className={styles.check_answers}>
              Check Answers
            </FullWidthButton>
            <FullWidthButton
              isLink
              linkPath="/quiz/page"
              className={styles.try_again}
              handleClick={handleOnAgain}>
              <img src={againImg} alt="again" /> Try Quiz Again
            </FullWidthButton>
          </div>
        </div>

        <NextBlock />
      </section>
    </>
  );
}

export default QuizResult;
