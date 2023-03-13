import styles from './Button.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, BASE_FONT } from '../../variablesJs';

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

export { GrayButton, SubmitButton, FullWidthButton, AgainButton };

export default Button;
