import styles from './Title.module.scss';

function Title({ headText, additionalText }) {
  return (
    <div className={styles.root}>
      <div className={styles.head}>{headText}</div>
      <div className={styles.additional}>{additionalText}</div>
    </div>
  );
}

export default Title;
