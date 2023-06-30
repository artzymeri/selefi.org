import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';


const Articles = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:9000/get').then((response) => {
          setArticles(response.data);
        });
      }, []);

    return (
        <>
        {articles.map((data) => {
            return (
              <>
                <h1>title: {data.title}</h1>
                <p>content: {data.content}</p>
              </>
            );
          })}
          <Link to='/posting'>To Home</Link>
        </>
    )
}


export default Articles;