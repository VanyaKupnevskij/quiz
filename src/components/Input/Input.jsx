import styles from './Input.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import visibleImage from '../../images/visible.svg';
import unvisibleImage from '../../images/unvisible.svg';

function Input({ isWrong, className, onChange, type = 'text', name, placeholder, value }) {
  const _className = classNames([styles.root, className, isWrong && styles.wrong]);

  return (
    <input
      className={_className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

function PasswordInput({ isWrong, className, onChange, type, name, placeholder, value }) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  function handleClickVisible() {
    setVisiblePassword((prev) => (prev = !prev));
  }

  return (
    <div className={styles.password_input}>
      <Input
        isWrong={isWrong}
        className={className}
        type={visiblePassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img
        src={visiblePassword ? visibleImage : unvisibleImage}
        alt="visible"
        className={styles.visible_button}
        onClick={handleClickVisible}
      />
    </div>
  );
}

export { PasswordInput };

export default Input;
