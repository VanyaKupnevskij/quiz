import Button from '../../../components/Button/Button';

import styles from './NextBlock.module.scss';

function NextBlock() {
  return (
    <div className={styles.root}>
      <div className={styles.chapter}>
        <div className={styles.head}>Next Chapter</div>
        <div>Quadratic Equations</div>
      </div>
      <Button isLink linkPath="/quiz/list/">
        Go
      </Button>
    </div>
  );
}

export default NextBlock;
