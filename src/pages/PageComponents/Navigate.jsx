import Button, { GrayButton } from '../../components/Button/Button';

import styles from './Navigate.module.scss';
import { useSelector } from 'react-redux';
import { selectAnswers, selectInfoQuiz } from '../../redux/slices/currentQuizSlice';

function Navigate({ questionId = 0, setQuestionId }) {
  const currentQuiz = useSelector(selectInfoQuiz);
  const answers = useSelector(selectAnswers);

  const handleOnPrev = () => {
    setQuestionId((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleOnNext = () => {
    setQuestionId((prev) =>
      prev < currentQuiz.questions.length - 1 && questionId < answers.length ? prev + 1 : prev,
    );
  };

  return (
    <div className={styles.navigate}>
      {questionId > 0 ? (
        <Button handleClick={handleOnPrev}>Previous</Button>
      ) : (
        <GrayButton handleClick={handleOnPrev}>Previous</GrayButton>
      )}
      {questionId < currentQuiz.questions.length - 1 && questionId < answers.length ? (
        <Button handleClick={handleOnNext}>Next</Button>
      ) : (
        <GrayButton handleClick={handleOnNext}>Next</GrayButton>
      )}
    </div>
  );
}

export default Navigate;
