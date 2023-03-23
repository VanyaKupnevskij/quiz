import Header from '../../components/Header/Header';
import CardQuiz from '../ListComponents/CardQuiz/CardQuiz';
import BreadCrumbs from '../ListComponents/BreadCrumbs/BreadCrumbs';

import classNames from 'classnames';
import styles from './QuizList.module.scss';
import { useSelector } from 'react-redux';
import { selectAnswers, selectInfoQuiz } from '../../redux/slices/currentQuizSlice';

function QuizList() {
  const currentQuiz = useSelector(selectInfoQuiz);
  const answers = useSelector(selectAnswers);

  return (
    <>
      <Header title={'Quizzes'} />

      <section className="main">
        <BreadCrumbs />

        <div className={styles.content}>
          <div className={classNames([styles.inner_list, 'inner'])}>
            <CardQuiz />
            <CardQuiz />
            <CardQuiz />
            <CardQuiz />
            <CardQuiz />
            <CardQuiz />
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizList;
