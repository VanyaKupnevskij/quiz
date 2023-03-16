import { FullWidthButton } from '../components/Button/Button';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

import styles from './QuizStart.module.scss';
import bannerImg from '../images/imageBanner1.png';
import timerImg from '../images/timer.svg';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../redux/slices/currentQuizSlice';
import { useEffect } from 'react';

function handleOnClick() {
  alert('click button/link');
}

function QuizStart() {
  const currentQuiz = useSelector(selectInfoQuiz);

  const _totalTime =
    currentQuiz.totalTime.substring(currentQuiz.totalTime.length - 2) === '00'
      ? currentQuiz.totalTime.substring(0, currentQuiz.totalTime.length - 3)
      : currentQuiz.totalTime;

  return (
    <>
      <Header title={'Start Quiz'} />
      <section className="main">
        <div className={styles.content}>
          <div className="inner">
            <p>Put your understanding of this concept to test by answering a few MCQs.</p>
            <Banner
              title={currentQuiz?.title}
              imageSrc={bannerImg}
              subject={currentQuiz?.subject}
              chapter={currentQuiz?.chapter}
            />
            <div className={styles.detail_info}>
              <div className={styles.total_questions}>
                Total Questions: <b>{currentQuiz?.questions?.length}</b>
              </div>
              <div className={styles.total_time}>
                Total Time: <b>{_totalTime} min</b>
              </div>
              {currentQuiz?.description.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.start_block}>
          <div className={styles.limit_time}>
            <img src={timerImg} alt="timer" />
            <span>{currentQuiz?.totalTime}</span>
          </div>
          <FullWidthButton isLink linkPath="/quiz/page" handleClick={handleOnClick}>
            Start Quiz
          </FullWidthButton>
        </div>
      </section>
    </>
  );
}

export default QuizStart;
