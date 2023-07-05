import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState([]);
  const submitFunction = () => {
    Axios.post('http://localhost:9001/login', {
      username: username,
      password: password
    }).then((response) => {
      setInfo(response)
      setUsername('');
      setPassword('');
      console.log(response)
    });
  };

  return (
    <>
      <h1>Login</h1>
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
      <h1>{info && info.length > 0 ? info.data[0].username : null}</h1>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Login;
