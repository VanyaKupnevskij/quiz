import Header from '../../components/Header/Header';

import styles from './QuizLogin.module.scss';
import { UserData } from '../../DBQuiz';

function QuizLogin() {
  return (
    <>
      <Header title={'Log in'} />

      <section className="main">
        <div className={styles.content}>
          <div className="inner">{/*  */}</div>
        </div>
      </section>
    </>
  );
}

export default QuizLogin;
