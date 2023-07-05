import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitFunction = () => {
    Axios.post('http://localhost:9001/register', {
      username: username,
      password: password
    }).then(() => {
      setUsername('');
      setPassword('');
    });
  };

  return (
    <>
      <h1>Register</h1>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submitFunction}>Submit</button>
      <Link to="/articles">Articles</Link>
      <br></br>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Register;
