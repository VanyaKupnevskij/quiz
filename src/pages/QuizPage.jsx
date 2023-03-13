import Header from '../components/Header/Header';
import Button, { SubmitButton, GrayButton } from '../components/Button/Button';

function handleOnClick() {
  alert('click button/link');
}

function QuizStart() {
  return (
    <>
      <header>
        <Header title={'Start Quiz'}>
          <SubmitButton isLink linkPath="/quiz/result">
            Submit
          </SubmitButton>
        </Header>
      </header>
      <section className="main">
        <div className="inner">
          <h1>Hello all</h1>
          <h2>Subtitle</h2>

          <GrayButton handleClick={handleOnClick}>Previous</GrayButton>
          <Button handleClick={handleOnClick}>Next</Button>
          <p>sdlru woiu j sejh iw efjoisue io hsrg e</p>
          <p>sdlru woiu j sejh iw </p>
          <p>sdlru se ef uiweufiefjoisue io hsrg e</p>
        </div>
      </section>
    </>
  );
}

export default QuizStart;
