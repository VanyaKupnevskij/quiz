import { ImageButton } from '../../../components/Button/Button';
import Input, { PasswordInput } from '../../../components/Input/Input';

import { useState } from 'react';
import styles from './BaseForm.module.scss';
import styled from 'styled-components';
import loginImage from '../../../images/login.svg';

const InputSubmit = styled(ImageButton)`
  max-width: 340px;
  align-self: center;
  margin-top: 32px;
`;

function BaseForm({ isLogin = true }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameWrong, setNameWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);

  function handleChangeName(event) {
    if (event.target.value === 'admin') setNameWrong(true);
    else setNameWrong(false);
    setName(event.target.value);
  }

  function handleChangePassword(event) {
    if (event.target.value === '12345') setPasswordWrong(true);
    else setPasswordWrong(false);
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    alert(name + ': ' + password);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      {(nameWrong || passwordWrong) && (
        <label className={styles.wrong_message}>User name not found. Try again</label>
      )}
      <label>
        <span>Name</span>
        <Input
          isWrong={nameWrong == true}
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        <span>Password</span>
        <PasswordInput
          isWrong={passwordWrong == true}
          name="name"
          placeholder="Enter your password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <InputSubmit type="submit" value="Login">
        {isLogin ? 'Log in' : 'Sign up'}
        {isLogin && <img src={loginImage} alt="login" />}
      </InputSubmit>
    </form>
  );
}

export default BaseForm;
