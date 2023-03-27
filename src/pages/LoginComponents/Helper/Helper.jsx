import styles from './Helper.module.scss';
import { Link } from 'react-router-dom';

function Helper({ text, linkText, linkPath }) {
  return (
    <div className={styles.root}>
      <span>{text}</span>
      <Link to={linkPath}>{linkText}</Link>
    </div>
  );
}

export default Helper;
