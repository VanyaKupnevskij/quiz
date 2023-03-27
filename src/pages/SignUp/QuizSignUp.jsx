import Header from '../../components/Header/Header';
import BaseForm from '../LoginComponents/BaseForm/BaseForm';
import Title from '../LoginComponents/Title/Title';
import Helper from '../LoginComponents/Helper/Helper';

import styles from './QuizSignUp.module.scss';
import classNames from 'classnames';

function QuizSignUp() {
  return (
    <>
      <Header title={'Sign up'} linkBack="/quiz/list/" />

      <section className="main">
        <div className={styles.content}>
          <div className={classNames(['inner', styles.innerLogin])}>
            <Title
              headText="Create new account"
              additionalText="Please fill in the form to continue"
            />
            <BaseForm isLogin={false} />
            <Helper text="Have an account?" linkPath="/quiz/login" linkText="Log in" />
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizSignUp;
