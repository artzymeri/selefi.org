import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';




function AppContent() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    useEffect(() => {
      Axios.get('http://localhost:9000/get').then((response) => {
      });
    }, []);
  
    const submitFunction = () => {
      Axios.post('http://localhost:9000/post', {
        title: title,
        content: content,
      }).then(() => {
        console.log('success!');
      });
    };
  
    return (
      <>
        <h1>Postings</h1>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Content:</label>
        <input
          type="text"
          name="content"
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