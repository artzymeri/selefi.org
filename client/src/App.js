import React, { useEffect, useState } from 'react';

import Axios from 'axios'


function App() {

   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [articles, setArticles] = useState([])

   useEffect(()=>{
    Axios.get('http://localhost:9000/get').then((response)=>{
      setArticles(response.data)
    })
   }, [])
   
   const submitFunction = () => {
    Axios.post('http://localhost:9000/post', {
      title: title,
      content: content
    }).then(()=>{
      console.log('success!')
    })
   }

  return (
    <>
    <h1>Article</h1>
    <label>Title:</label>
    <input type="text" name="title" onChange={(e)=> {
      setTitle(e.target.value)
    }} />
    <label>Content:</label>
    <input type="text" name="content" onChange={(e)=>{
      setContent(e.target.value)
    }} />
    <button onClick={submitFunction}>Submit</button>

    {articles.map((data)=> {
      return (
        <>
      <h1>title:{data.title}</h1>
      <p>content:{data.content}</p>
      </>
      )
    })}
    </>
  );
}

export default App;
