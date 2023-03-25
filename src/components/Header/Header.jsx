import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import backImg from '../../images/back.svg';

function Header({ hasBackButton = true, title, children }) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {hasBackButton && (
        <button onClick={() => navigate(-1)} className={styles.back_link}>
          <img src={backImg} alt="back" />
        </button>
      )}
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
}

export default Header;
