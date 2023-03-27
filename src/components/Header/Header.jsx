import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import backImageSrc from '../../images/back.svg';
import homeImageSrc from '../../images/home.svg';

function Header({ hasBackButton = true, linkBack, title, children }) {
  const navigate = useNavigate();
  const backImage = linkBack?.includes('/quiz/list') ? homeImageSrc : backImageSrc;

  function handleClickBack() {
    if (linkBack) navigate(linkBack);
    else navigate(-1);
  }

  return (
    <header className={styles.header}>
      {hasBackButton && (
        <button onClick={handleClickBack} className={styles.back_link}>
          <img src={backImage} alt="back" />
        </button>
      )}
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
}

export default Header;
