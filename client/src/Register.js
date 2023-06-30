import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFunction = () => {
    Axios.post('http://localhost:9001/post', {
      username: username,
      email: email,
      password: password
    }).then(() => {
      setUsername('');
      setEmail('');
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
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
      <Link to="/articles">To Articles</Link>
    </>
  );
}

export default Register;
