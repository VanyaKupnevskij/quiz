import styles from './Button.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Button({ className, isLink, linkPath = '/', children, handleClick }) {
  const _className = classNames([styles.root, className]);

  return isLink ? (
    <Link to={linkPath} className={_className} onClick={handleClick}>
      {children}
    </Link>
  ) : (
    <button className={_className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
