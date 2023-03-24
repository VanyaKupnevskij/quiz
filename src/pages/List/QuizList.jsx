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
        <BreadCrumbs
          items={[
            { name: currentQuiz.subject, linkName: 'math' },
            { name: currentQuiz.chapter, linkName: 'real_numbers' },
          ]}
        />

        <div className={styles.content}>
          <div className={classNames([styles.inner_list, 'inner'])}>
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={5}
              totalQuestion={5}
            />
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={3}
              totalQuestion={7}
            />
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={1}
              totalQuestion={11}
            />
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={0}
              totalQuestion={6}
            />
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={0}
              totalQuestion={7}
            />
            <CardQuiz
              link={'/quiz/start'}
              title={currentQuiz.title}
              answeredQuestion={0}
              totalQuestion={5}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizList;
