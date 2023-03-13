import { FullWidthButton } from '../components/Button/Button';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

import styles from './QuizStart.module.scss';
import bannerImg from '../images/imageBanner1.png';
import timerImg from '../images/timer.svg';

function handleOnClick() {
  alert('click button/link');
}

function QuizStart() {
  return (
    <>
      <Header title={'Start Quiz'} />
      <section className="main">
        <div className={styles.content}>
          <div className="inner">
            <p>Put your understanding of this concept to test by answering a few MCQs.</p>
            <Banner
              title={'Pair of Linear Equation in Two Variables'}
              imageSrc={bannerImg}
              subject={'Maths'}
              chapter={'Real Numbers'}
            />
            <div className={styles.detail_info}>
              <div className={styles.total_questions}>
                Total Questions: <b>05</b>
              </div>
              <div className={styles.total_time}>
                Total Time: <b>15 min</b>
              </div>
              <p>
                The quizzes consists of questions carefully designed to help you self-assess your
                comprehension of the information presented on the topics covered in the module.
              </p>
              <p>
                After responding to a question, click on the "Next Question" button at the bottom to
                go to the next questino. After responding to the 8th question, click on "Close" on
                the top of the window to exit the quiz.
              </p>
              <p>
                If you select an incorrect response for a question, you can try again until you get
                the correct response. If you retake the quiz, the questions and their respective
                responses will be randomized.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.start_block}>
          <div className={styles.limit_time}>
            <img src={timerImg} alt="timer" />
            <span>15:00</span>
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
