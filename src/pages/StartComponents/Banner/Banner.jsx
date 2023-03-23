import styles from './Banner.module.scss';
import { useSelector } from 'react-redux';
import { selectInfoQuiz } from '../../../redux/slices/currentQuizSlice';

function Banner() {
  const currentQuiz = useSelector(selectInfoQuiz);

  const bannerImg = require(`../../../images/${currentQuiz.imageBanner}`);

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>{currentQuiz.title}</h2>
        <img src={bannerImg} alt="banner" />
      </div>
      <div className={styles.category}>
        <div className={styles.subtitle}>
          Subject: <b>{currentQuiz.subject}</b>
        </div>
        <div className={styles.subtitle}>
          Chapter: <b>{currentQuiz.chapter}</b>
        </div>
      </div>
    </div>
  );
}

export default Banner;
