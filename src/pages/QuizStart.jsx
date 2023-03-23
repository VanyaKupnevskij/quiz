import Header from '../components/Header/Header';
import Banner from './StartComponents/Banner/Banner';
import StartBlock from './StartComponents/StartBlock/StartBlock';
import DetailInfo from './StartComponents/DetailInfo/DetailInfo';

import styles from './QuizStart.module.scss';

function QuizStart() {
  return (
    <>
      <Header title={'Start Quiz'} />
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
