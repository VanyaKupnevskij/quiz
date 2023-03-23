import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import backImg from '../../images/back.svg';

function Header({ backLink = '/quiz/list/', title, children }) {
  return (
    <header className={styles.header}>
      <Link to={backLink} className={styles.back_link}>
        <img src={backImg} alt="back" />
      </Link>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
}

export default Header;
