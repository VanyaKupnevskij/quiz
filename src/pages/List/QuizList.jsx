import Header from '../../components/Header/Header';
import CardQuiz from '../ListComponents/CardQuiz/CardQuiz';
import BreadCrumbs from '../ListComponents/BreadCrumbs/BreadCrumbs';

import classNames from 'classnames';
import styles from './QuizList.module.scss';
import { Quizes } from '../../DBQuiz';

function QuizList() {
  return (
    <>
      <Header title={'Quizzes'} />

      <section className="main">
        <BreadCrumbs
          items={[
            { name: Quizes[0].subject, linkName: 'computer_programming' },
            { name: Quizes[0].chapter, linkName: 'c_programming' },
          ]}
        />

        <div className={styles.content}>
          <div className={classNames([styles.inner_list, 'inner'])}>
            {Quizes.map((quiz, id) => (
              <CardQuiz idQuiz={id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizList;
