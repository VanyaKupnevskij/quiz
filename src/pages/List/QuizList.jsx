import Header from '../../components/Header/Header';
import CardQuiz from '../ListComponents/CardQuiz/CardQuiz';
import BreadCrumbs from '../ListComponents/BreadCrumbs/BreadCrumbs';

import classNames from 'classnames';
import styles from './QuizList.module.scss';
import { Quizes, Subjects, Сhapters } from '../../DBQuiz';
import { useParams } from 'react-router-dom';

function QuizList() {
  const { subjectParam, chapterParam } = useParams();

  let breadCrumbsItems = [];

  let listCards = [];
  if (subjectParam) {
    const subject = Subjects.find((subject) => subject.link === subjectParam);
    breadCrumbsItems = [{ title: subject.title, linkName: '/list/subject/' + subject.link }];

    const chaptersId = subject.chaptersId;
    for (let chapterId of chaptersId) {
      listCards.push(Сhapters.find((chapter) => chapter.id === chapterId));
    }
  } else if (chapterParam) {
    const chapter = Сhapters.find((chapter) => chapter.link === chapterParam);
    const subject = Subjects.find((subject) => subject.id === chapter.subjectId);
    breadCrumbsItems = [
      { title: subject.title, linkName: '/list/subject/' + subject.link },
      { title: chapter.title, linkName: '/list/chapter/' + chapter.link },
    ];

    const quizzesId = chapter.quizzesId;
    for (let quizId of quizzesId) {
      listCards.push(Quizes.find((quiz) => quiz.id === quizId));
    }
  } else {
    listCards = Subjects;
  }

  return (
    <>
      <Header title={'Quizzes'} hasBackButton={false} />

      <section className="main">
        <BreadCrumbs items={breadCrumbsItems} />

        <div className={styles.content}>
          <div className={classNames([styles.inner_list, 'inner'])}>
            {listCards.map((item) => (
              <CardQuiz
                subjectParam={subjectParam}
                chapterParam={chapterParam}
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizList;
