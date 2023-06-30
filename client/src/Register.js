import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';




function AppContent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState([]);
  
    useEffect(() => {
      Axios.get('http://localhost:8000/get').then((response) => {
        setArticles(response.data);
      });
    }, []);
  
    const submitFunction = () => {
      Axios.post('http://localhost:8000/post', {
        username: username,
        email: email,
        password: password
      }).then(() => {
        console.log('success!');
      });
    };
  
    return (
      <>
        <h1>Register</h1>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Content:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          
        />
        <label>Content:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          
        />
        <button onClick={submitFunction}>Submit</button>
        <Link to='/articles'>To Articles</Link>
      </>
    );
  }
  
  export default AppContent;