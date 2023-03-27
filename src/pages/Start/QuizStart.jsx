import Header from '../../components/Header/Header';
import Banner from '../StartComponents/Banner/Banner';
import StartBlock from '../StartComponents/StartBlock/StartBlock';
import DetailInfo from '../StartComponents/DetailInfo/DetailInfo';

import styles from './QuizStart.module.scss';
import { setQuiz } from '../../redux/slices/currentQuizSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Quizes } from '../../DBQuiz';

function QuizStart() {
  const dispatch = useDispatch();
  const { quizId } = useParams();
  console.log(quizId);
  console.log(Quizes.find((quiz) => quiz.id === +quizId));
  dispatch(setQuiz(Quizes.find((quiz) => quiz.id === +quizId)));

  return (
    <>
      <Header title={'Start Quiz'} linkBack="/quiz/list/" />
      <section className="main">
        <div className={styles.content}>
          <div className="inner">
            <p>Put your understanding of this concept to test by answering a few MCQs.</p>
            <Banner />
            <DetailInfo />
          </div>
        </div>
        <StartBlock />
      </section>
    </>
  );
}

export default QuizStart;
