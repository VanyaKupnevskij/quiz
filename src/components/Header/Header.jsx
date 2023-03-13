import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import backImg from '../../images/back.svg';

function Header({ backLink = '/quiz', title, children }) {
  return (
    <header className={styles.header}>
      <Link to={backLink} class={styles.back_link}>
        <img src={backImg} alt="back" />
      </Link>
      <h1 class={styles.title}>{title}</h1>
      {children}
    </header>
  );
}

export default Header;
