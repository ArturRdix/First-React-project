import React, { useState } from 'react';
import PostCreate from './components/postCreate';
import PostList from './components/postList';
import './styles/app.css'

function App() {

  const [posts, setPosts1] = useState([
  ])
  let maxId = posts[posts.length - 1]?.id ?? 0;


  function addNewPost(newPost) {
    newPost.id = ++maxId;
    setPosts1([...posts, newPost])
  }
  function removePost(post) {
    setPosts1(posts.filter(e => e.id !== post.id))
  }
  return (
    <div className="App">
      <PostCreate callBack={addNewPost} />
      
      <select>
        <option value="value1">По-названию</option>
        <option value="value2">По-описанию</option>
      </select>
      {
        maxId !== 0
          ? <PostList remove={removePost} posts={posts} title='СПИСОК ПОСТОВ' />
          : <h1 style={{textAlign: 'center'}}>Тут пусто, ёпт</h1>
      }
    </div>
  );
}

export default App;