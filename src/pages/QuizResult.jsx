import { FullWidthButton } from '../components/Button/Button';

import { Link } from 'react-router-dom';

import againImg from '../images/again.svg';

function handleOnClick() {
  alert('click button/link');
}

function QuizResult() {
  return (
    <>
      <header>
        <Link to="/quiz">
          <h1>_ Result _</h1>
        </Link>
      </header>
      <section className="main">
        <div className="inner">
          <h1>Hello all</h1>
          <h2>Subtitle</h2>
          <FullWidthButton isLink linkPath="/quiz/page" handleClick={handleOnClick}>
            Check Answers
          </FullWidthButton>
          <FullWidthButton isLink linkPath="/quiz/page" handleClick={handleOnClick}>
            <img src={againImg} alt={'again'} />
            Try Quiz Again
          </FullWidthButton>
          <p>sdlru woiu j sejh iw efjoisue io hsrg e</p>
          <p>sdlru woiu j sejh iw </p>
          <p>sdlru se ef uiweufiefjoisue io hsrg e</p>
        </div>
      </section>
    </>
  );
}

export default QuizResult;
