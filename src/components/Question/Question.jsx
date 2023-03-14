import styles from './Question.module.scss';
import classNames from 'classnames';

function Question() {
  return (
    <>
      <div className={styles.numeric_question}>
        <span className={styles.current}>Q.3</span>
        <span className={styles.total}> / 5</span>
      </div>
      <p className={styles.question}>
        Graphically, the pair of equations 7x – y = 5; 21x – 3y = 10 represents two lines which are
      </p>
      <ol className={styles.answers}>
        <li className={styles.variant}>
          <span className={styles.mark}>A.</span>
          <span className={styles.text}>Intersect at one point</span>
        </li>
        <li className={styles.variant}>
          <span className={styles.mark}>B.</span>
          <span className={styles.text}>Intersect at two point</span>
        </li>
        <li className={classNames([styles.variant, styles.checked])}>
          <span className={styles.mark}>C.</span>
          <span className={styles.text}>Parallel</span>
        </li>
        <li className={styles.variant}>
          <span className={styles.mark}>D.</span>
          <span className={styles.text}>Coincident</span>
        </li>
      </ol>
    </>
  );
}

export default Question;
