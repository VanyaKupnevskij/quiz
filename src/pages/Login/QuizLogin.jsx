import Header from '../../components/Header/Header';
import BaseForm from '../LoginComponents/BaseForm/BaseForm';
import Title from '../LoginComponents/Title/Title';
import Helper from '../LoginComponents/Helper/Helper';

import styles from './QuizLogin.module.scss';
import classNames from 'classnames';

function QuizLogin() {
  return (
    <>
      <Header title={'Log in'} linkBack="/quiz/list/" />

      <section className="main">
        <div className={styles.content}>
          <div className={classNames(['inner', styles.innerLogin])}>
            <Title headText="Welcome back!" additionalText="Please log in to your account" />
            <BaseForm isLogin={true} />
            <Helper text="Don't have an account?" linkPath="/quiz/signup" linkText="Sign up" />
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizLogin;
