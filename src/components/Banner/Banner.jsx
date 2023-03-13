import styles from './Banner.module.scss';

function Banner({ title, imageSrc, subject, chapter }) {
  return (
    <div class={styles.root}>
      <div class={styles.title}>
        <h2>{title}</h2>
        <img src={imageSrc} alt="banner" />
      </div>
      <div class={styles.category}>
        <div class={styles.subtitle}>
          Subject: <b>{subject}</b>
        </div>
        <div class={styles.subtitle}>
          Chapter: <b>{chapter}</b>
        </div>
      </div>
    </div>
  );
}

export default Banner;
