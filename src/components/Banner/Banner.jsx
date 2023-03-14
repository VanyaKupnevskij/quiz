import styles from './Banner.module.scss';

function Banner({ title, imageSrc, subject, chapter }) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <img src={imageSrc} alt="banner" />
      </div>
      <div className={styles.category}>
        <div className={styles.subtitle}>
          Subject: <b>{subject}</b>
        </div>
        <div className={styles.subtitle}>
          Chapter: <b>{chapter}</b>
        </div>
      </div>
    </div>
  );
}

export default Banner;
