import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [id, onIdChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault(); // Cegah reload halaman default form submit
    login({ id, password });
  };

  return (
    <form className="login-input" onSubmit={onSubmit}>
      <input type="text" value={id} onChange={onIdChange} placeholder="Username" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
