import Button from '../components/Button/Button';
import Header from '../components/Header/Header';

import styled from 'styled-components';
import { COLORS, BASE_FONT } from '../variablesJs';
import againImg from '../images/again.svg';

const GrayButton = styled(Button)`
  background-color: ${COLORS.gray};
  color: #bdbdbd;
`;

const SubmitButton = styled(Button)`
  background-color: ${COLORS.gray};
  border: 2px solid ${COLORS.blue};
  font-family: ${BASE_FONT};
  font-weight: 500;
  padding: 13px 15px;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const AgainButton = styled(FullWidthButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;

function handleOnClick() {
  alert('click button/link');
}

function QuizStart() {
  return (
    <>
      <Header title={'Start Quiz'}>
        <SubmitButton isLink linkPath="/quiz/result">
          Submit
        </SubmitButton>
      </Header>
      <section className="main">
        <div className="inner">
          <h1>Hello all</h1>
          <h2>Subtitle</h2>
          <p>sdlru woiu j sejh iw efjoisue io hsrg e</p>
          <p>sdlru woiu j sejh iw </p>
          <FullWidthButton isLink linkPath="/quiz/page" handleClick={handleOnClick}>
            Start Quiz
          </FullWidthButton>
          <br />
          <Button handleClick={handleOnClick}>Go</Button>
          <br />
          <FullWidthButton isLink linkPath="/quiz/page">
            Check Answers
          </FullWidthButton>
          <br />
          <AgainButton isLink linkPath="/quiz/page">
            <img src={againImg} alt="again" />
            Try Quiz Again
          </AgainButton>
          <br />
          <GrayButton>Previous</GrayButton>
          <Button>Next</Button>
          <br />

          <p>sdlru se ef uiweufiefjoisue io hsrg e</p>
        </div>
      </section>
    </>
  );
}

export default QuizStart;
